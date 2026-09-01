"use client";

import { useCallback, useState } from "react";
import { flavors } from "@/lib/flavors";
import ParallaxBackground from "@/components/ParallaxBackground";
import FlavorCarousel from "@/components/FlavorCarousel";

export default function Hero() {
  const [activeColor, setActiveColor] = useState(flavors[0].color);

  const handleFlavorChange = useCallback((color: string) => {
    setActiveColor(color);
  }, []);

  return (
    <section
      className="relative h-[85svh] sm:h-screen overflow-hidden flex items-center justify-center"
      aria-label="Hartwall Long Drink hero"
    >
      {/* Parallax background — absolutely positioned, never resets */}
      <ParallaxBackground activeColor={activeColor} />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-hero-entrance">
        {/* Brand lockup */}
        <div className="mb-6 sm:mb-10">
          <p className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            Finland&apos;s Original
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
            Hartwall
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-medium tracking-widest uppercase mt-1">
            Long Drink
          </p>
        </div>

        {/* Flavor carousel */}
        <FlavorCarousel onFlavorChange={handleFlavorChange} />

        {/* Scroll hint */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2 animate-drift-slow">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Scroll to discover
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/40"
            aria-hidden="true"
          >
            <path
              d="M10 3v14M4 11l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
