"use client";

import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  activeColor: string;
}

const PARTICLES = [
  { top: "14%", left: "9%", size: 10, animClass: "animate-drift" },
  { top: "22%", right: "14%", size: 7, animClass: "animate-drift-slow" },
  { top: "55%", left: "7%", size: 12, animClass: "animate-drift-alt" },
  { top: "38%", right: "9%", size: 8, animClass: "animate-drift" },
  { top: "68%", right: "22%", size: 6, animClass: "animate-drift-slow" },
  { top: "48%", left: "20%", size: 9, animClass: "animate-drift-alt" },
  { top: "80%", left: "35%", size: 5, animClass: "animate-drift" },
  { top: "18%", left: "50%", size: 7, animClass: "animate-drift-slow" },
];

export default function ParallaxBackground({
  activeColor,
}: ParallaxBackgroundProps) {
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);
  const layerCRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const cx = innerWidth / 2;
      const cy = innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      if (layerARef.current) {
        layerARef.current.style.transform = `translate(${dx * -4}px, ${dy * -4}px)`;
      }
      if (layerBRef.current) {
        layerBRef.current.style.transform = `translate(${dx * -8}px, ${dy * -6}px)`;
      }
      if (layerCRef.current) {
        layerCRef.current.style.transform = `translate(${dx * -14}px, ${dy * -10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ "--flavor-color": activeColor } as React.CSSProperties}
    >
      {/* Layer A — deep gradient background, tinted by active flavor */}
      <div
        ref={layerARef}
        className="absolute inset-[-4%] transition-[background] duration-700 ease-in-out"
        style={{
          background: `
            radial-gradient(ellipse at 30% 60%, color-mix(in srgb, var(--flavor-color) 20%, transparent) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 25%, color-mix(in srgb, var(--flavor-color) 12%, transparent) 0%, transparent 50%),
            linear-gradient(160deg, #0f172a 0%, #1a0c2e 50%, #0a1628 100%)
          `,
        }}
      />

      {/* Layer B — Himalayan mountain silhouette */}
      <div
        ref={layerBRef}
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice"
          className="w-full"
          aria-hidden="true"
        >
          {/* Far range — faintest */}
          <path
            d="M0,320 L0,220 L90,130 L180,200 L290,90 L380,180 L470,70 L560,160 L650,50 L740,150 L830,80 L920,170 L1010,60 L1100,170 L1190,100 L1280,190 L1370,110 L1440,170 L1440,320 Z"
            fill="white"
            fillOpacity="0.045"
          />
          {/* Mid range */}
          <path
            d="M0,320 L0,260 L120,160 L240,250 L360,140 L480,240 L600,120 L720,230 L840,130 L960,240 L1080,150 L1200,250 L1320,160 L1440,230 L1440,320 Z"
            fill="white"
            fillOpacity="0.07"
          />
          {/* Near range — strongest */}
          <path
            d="M0,320 L0,295 L160,220 L280,290 L400,210 L520,285 L640,200 L760,280 L880,195 L1000,275 L1120,200 L1240,275 L1360,215 L1440,265 L1440,320 Z"
            fill="white"
            fillOpacity="0.10"
          />
        </svg>
      </div>

      {/* Layer C — ambient drifting particles */}
      <div
        ref={layerCRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${p.animClass}`}
            style={{
              top: p.top,
              left: "left" in p ? p.left : undefined,
              right: "right" in p ? p.right : undefined,
              width: p.size,
              height: p.size,
              backgroundColor: activeColor,
              animationDelay: `${(i * 1.7) % 10}s`,
              transition: "background-color 0.7s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
