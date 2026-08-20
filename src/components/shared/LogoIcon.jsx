/**
 * LogoIcon — PyDisciple brand icon mark.
 * Blue rounded-square tile with three white chevrons (>>> Python REPL prompt),
 * fading left to right. Fixed colors — does not adapt to dark mode by design.
 *
 * @param {number} size  - Width/height in px (default 32).
 * @param {string} className - Optional extra class for the <svg> element.
 */
export default function LogoIcon({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Blue rounded-square background tile */}
      <rect width="100" height="100" rx="24" fill="#2563EB" />

      {/* Chevron 1 — full opacity (leftmost) */}
      <polyline
        points="21,32 35,50 21,68"
        fill="none"
        stroke="white"
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chevron 2 — 60% opacity (middle) */}
      <polyline
        points="43,32 57,50 43,68"
        fill="none"
        stroke="white"
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      {/* Chevron 3 — 28% opacity (rightmost, subtlest) */}
      <polyline
        points="65,32 79,50 65,68"
        fill="none"
        stroke="white"
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.28"
      />
    </svg>
  );
}
