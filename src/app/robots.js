/**
 * robots.js — Next.js App Router built-in robots.txt generator.
 * Accessible at: https://pydisciple.vercel.app/robots.txt
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pydisciple.vercel.app/sitemap.xml',
  };
}
