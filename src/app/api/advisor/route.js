import { GoogleGenAI } from "@google/genai";
import { resources } from "@/data/resources";

// Initialise the SDK once (module-level, reused across requests in the same worker)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Build a lean catalog — strip fields that are irrelevant / null for every entry
const catalog = resources.map(({ slug, title, category, difficulty, tags, description }) => ({
  slug,
  title,
  category,
  difficulty,
  tags,
  description,
}));

const SYSTEM_INSTRUCTION = `You are a Python learning advisor for the PyDisciple platform.
Your job is to build a personalised study path for the user based on their stated goal.

RULES (follow strictly):
1. You MUST only recommend resources that exist in the catalog below. Do NOT invent resources.
2. Pick between 2 and 4 resources. No more, no less.
3. Each step must reference a real slug from the catalog.
4. Return ONLY valid JSON that matches the schema exactly — no markdown fences, no extra keys.

OUTPUT SCHEMA:
{
  "pathwayTitle": "<short motivating title for the path>",
  "estimatedTime": "<realistic total time estimate, e.g. '2–3 weeks'>",
  "steps": [
    {
      "stepNumber": 1,
      "slug": "<exact slug from catalog>",
      "actionableAdvice": "<1-2 sentences: what to do with this resource and why>"
    }
  ]
}

RESOURCE CATALOG:
${JSON.stringify(catalog)}`;

/**
 * Calls the Gemini API with a simple retry (up to 3 attempts, 1s back-off)
 * to handle transient 503 errors surfaced as undici SyntaxErrors.
 */
async function callGeminiWithRetry(userGoal, maxAttempts = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: userGoal,
        config: {
          responseMimeType: "application/json",
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      return result;
    } catch (err) {
      lastErr = err;
      const isTransient =
        // SDK ApiError with 503 / 429
        err?.status === 503 || err?.status === 429 ||
        // SDK internal undici crash when Gemini returns a non-JSON body (503 HTML page)
        (err instanceof SyntaxError && err.message?.includes("JSON"));

      if (isTransient && attempt < maxAttempts) {
        await new Promise((r) => setTimeout(r, 1000 * attempt)); // 1s, 2s back-off
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userGoal } = body;

    if (!userGoal || typeof userGoal !== "string" || userGoal.trim().length === 0) {
      return Response.json(
        { error: "userGoal is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    const result = await callGeminiWithRetry(userGoal.trim());

    const text = result.text;

    if (!text) {
      console.error("Gemini returned empty text. Result:", JSON.stringify(result));
      return Response.json(
        { error: "AI returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    // Validate it's parseable JSON before returning
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      console.error("Gemini returned non-JSON text:", text);
      return Response.json(
        { error: "AI returned an unexpected response format. Please try again." },
        { status: 502 }
      );
    }

    return Response.json(parsed, { status: 200 });
  } catch (err) {
    const status = err?.status;
    const message = err?.message || "";

    // Surface a user-friendly message for known Gemini error codes
    if (status === 503 || (err instanceof SyntaxError && message.includes("JSON"))) {
      return Response.json(
        { error: "The AI model is currently busy. Please try again in a few seconds." },
        { status: 503 }
      );
    }
    if (status === 429) {
      return Response.json(
        { error: "Rate limit reached. Please wait a moment and try again." },
        { status: 429 }
      );
    }
    if (status === 401 || status === 403) {
      return Response.json(
        { error: "API authentication error. Please check the server configuration." },
        { status: 500 }
      );
    }

    console.error("Advisor API unhandled error:", err?.name, err?.message);
    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
