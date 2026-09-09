"use client";

import { useState } from "react";
import { resources } from "@/data/resources";
import ResourceCard from "@/components/resources/ResourceCard";
import styles from "./AiAdvisor.module.css";

const QUICK_CHIPS = [
  "Python for Beginners",
  "Data Science Roadmap",
  "Job Interview Prep",
  "Machine Learning Starter",
  "Web Development with Python",
];

// Official Gemini Sparkle Icon (SVG)
function GeminiSparkle({ className }) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <path d="M11.6667 22L10.3704 15.6852L4 14.3889V12.6111L10.3704 11.3148L11.6667 5H13.4444L14.7407 11.3148L21.1111 12.6111V14.3889L14.7407 15.6852L13.4444 22H11.6667ZM18.7778 8.11111L18.1296 4.96296L15 4.31481V3.42593L18.1296 2.77778L18.7778 -0.370371H19.6667L20.3148 2.77778L23.4444 3.42593V4.31481L20.3148 4.96296L19.6667 8.11111H18.7778Z" fill="url(#geminiGradient)"/>
      <defs>
        <linearGradient id="geminiGradient" x1="4" y1="10.8148" x2="23.4444" y2="10.8148" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285f4"/>
          <stop offset="0.5" stopColor="#9b72cb"/>
          <stop offset="1" stopColor="#d96570"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Skeleton placeholder for a single card while loading
function SkeletonCard() {
  return <div className={styles.skeleton} aria-hidden="true" />;
}

// Pulsing "thinking" dots animation
function ThinkingDots() {
  return (
    <span className={styles.dots} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function AiAdvisor() {
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);   // { pathwayTitle, estimatedTime, steps }
  const [error, setError]     = useState(null);

  const handleSubmit = async (goal) => {
    const trimmed = (goal ?? input).trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userGoal: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setResult(data);
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChip = (chip) => {
    setInput(chip);
    handleSubmit(chip);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setInput("");
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* ── Header Area ──────────────────────────────────────── */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            POWERED BY GEMINI AI
          </div>
          <h2 className={styles.title}>Your Personal Study Path</h2>
          <p className={styles.subtitle}>
            Describe your Python goal and we'll build a curated learning path just for you.
          </p>
        </div>

        {/* ── Input form ──────────────────────────────────────── */}
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles.inputRow}>
            {/* Authentic Gemini Sparkle icon inside input */}
            <GeminiSparkle className={styles.geminiSparkle} />

            <input
              id="ai-advisor-input"
              type="text"
              className={styles.input}
              placeholder='e.g. "I want to learn Python for data science from scratch"'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              aria-label="Describe your Python learning goal"
            />

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading || !input.trim()}
              aria-label="Generate study path"
            >
              {loading ? <ThinkingDots /> : "Generate →"}
            </button>
          </div>

          {/* ── Quick-filter chips ─────────────────────────────── */}
          <div className={styles.chips} role="group" aria-label="Quick goal suggestions">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={`${styles.chip} ${input === chip ? styles.chipActive : ""}`}
                onClick={() => handleChip(chip)}
                disabled={loading}
              >
                {chip}
              </button>
            ))}
          </div>
        </form>

        {/* ── Loading state ────────────────────────────────────── */}
        {loading && (
          <div className={styles.loadingState} aria-live="polite" aria-busy="true">
            <div className={styles.loadingHeader}>
              <div className={styles.thinkingBadge}>
                <ThinkingDots />
                <span>Gemini is building your path</span>
              </div>
            </div>
            <div className={styles.skeletonGrid}>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>
        )}

        {/* ── Error state ──────────────────────────────────────── */}
        {error && !loading && (
          <div className={`${styles.errorBox} fade-in`} role="alert">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>{error}</p>
            <button className={styles.retryBtn} onClick={handleReset}>
              Try again
            </button>
          </div>
        )}

        {/* ── Results ──────────────────────────────────────────── */}
        {result && !loading && (
          <div className={`${styles.results} fade-in`} aria-live="polite">

            {/* Path header */}
            <div className={styles.pathHeader}>
              <div className={styles.pathMeta}>
                <h3 className={styles.pathTitle}>{result.pathwayTitle}</h3>
                <span className={styles.pathTime}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {result.estimatedTime}
                </span>
              </div>
              <button className={styles.resetBtn} onClick={handleReset} aria-label="Reset advisor">
                ✕ New path
              </button>
            </div>

            {/* Steps */}
            <div className={styles.stepsGrid}>
              {result.steps?.map((step) => {
                const resource = resources.find((r) => r.slug === step.slug);
                if (!resource) return null;

                return (
                  <div key={step.stepNumber} className={`${styles.stepWrap} slide-up`}
                    style={{ animationDelay: `${(step.stepNumber - 1) * 0.1}s` }}>

                    {/* Step number badge */}
                    <div className={styles.stepBadge} aria-label={`Step ${step.stepNumber}`}>
                      <span className={styles.stepNumber}>{step.stepNumber}</span>
                    </div>

                    {/* Advice callout */}
                    <div className={styles.adviceBox}>
                      <GeminiSparkle className={styles.geminiSparkle} />
                      <p className={styles.adviceText}>{step.actionableAdvice}</p>
                    </div>

                    {/* ResourceCard */}
                    <ResourceCard resource={resource} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
