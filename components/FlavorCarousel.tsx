"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { flavors } from "@/lib/flavors";

interface FlavorCarouselProps {
  onFlavorChange: (color: string) => void;
}

export default function FlavorCarousel({
  onFlavorChange,
}: FlavorCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectFlavor = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Sync color to parent whenever activeIndex changes
  useEffect(() => {
    onFlavorChange(flavors[activeIndex].color);
  }, [activeIndex, onFlavorChange]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % flavors.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Can container */}
      <div
        className="relative h-64 w-48 sm:h-80 sm:w-60"
        aria-live="polite"
        aria-label={`Current flavor: ${flavors[activeIndex].name}`}
      >
        {flavors.map((flavor, index) => (
          <div
            key={flavor.name}
            className={`absolute inset-0 transition-all duration-500 ${
              index === activeIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Image
              src={flavor.image}
              alt={`${flavor.name} Hartwall Long Drink can`}
              fill
              className="object-contain drop-shadow-2xl"
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes="(max-width: 640px) 192px, 240px"
            />
          </div>
        ))}
      </div>

      {/* Flavor name */}
      <p className="mt-3 mb-4 text-white/80 text-sm font-medium tracking-wider uppercase min-h-5">
        {flavors[activeIndex].name}
      </p>

      {/* Dot selectors */}
      <div className="flex gap-3 justify-center" role="tablist" aria-label="Flavor selector">
        {flavors.map((flavor, index) => (
          <button
            key={flavor.name}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${flavor.name}`}
            onClick={() => selectFlavor(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              index === activeIndex
                ? "scale-125 ring-2 ring-white ring-offset-2 ring-offset-transparent"
                : "opacity-60 hover:opacity-90 hover:scale-110"
            }`}
            style={{ backgroundColor: flavor.color }}
          />
        ))}
      </div>
    </div>
  );
}
