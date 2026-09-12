// Traditional Tibetan/Nepali prayer flags: Blue, White, Red, Green, Yellow
const FLAG_COLORS = ["#1565c0", "#f0f0f0", "#c62828", "#2e7d32", "#f9a825"];
const FLAG_COUNT = 22;

/** Round to 4 decimal places — keeps server & client bit-for-bit identical */
const r4 = (n: number) => Math.round(n * 10000) / 10000;

export default function PrayerFlags({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        className="w-full h-14 sm:h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Catenary string */}
        <path
          d="M 0 15 Q 500 5 1000 15"
          stroke="#8b7355"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
        />

        {Array.from({ length: FLAG_COUNT }, (_, i) => {
          // All coords rounded to 4 dp — eliminates Node vs browser float precision diff
          const x       = r4((i / (FLAG_COUNT - 1)) * 1000);
          const stringY = r4(15 + 10 * Math.sin((i / (FLAG_COUNT - 1)) * Math.PI));
          const flagH   = 36 + (i * 7 + 3) % 8; // deterministic int, no float
          const color   = FLAG_COLORS[i % FLAG_COLORS.length];
          const delay   = `${(i * 0.13).toFixed(2)}s`;
          const dur     = `${(2.6 + (i % 4) * 0.4).toFixed(1)}s`;

          return (
            <polygon
              key={i}
              points={`${r4(x - 12)},${stringY} ${r4(x + 12)},${stringY} ${x},${r4(stringY + flagH)}`}
              fill={color}
              opacity="0.88"
              // Use individual animation sub-properties instead of the shorthand.
              // The shorthand gets expanded to individual props by the browser's CSSOM
              // during SSR serialisation, causing a React hydration diff.
              style={{
                transformOrigin: `${x}px ${stringY}px`,
                animationName: "flag-sway",
                animationDuration: dur,
                animationTimingFunction: "ease-in-out",
                animationDelay: delay,
                animationIterationCount: "infinite",
                animationFillMode: "none",
                animationDirection: "normal",
                animationPlayState: "running",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
