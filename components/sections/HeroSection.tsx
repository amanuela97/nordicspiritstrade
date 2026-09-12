"use client";

import { useTranslations } from "next-intl";
import PrayerFlags from "@/components/ui/PrayerFlags";

interface HeroSectionProps {
  onContactOpen: () => void;
}

export default function HeroSection({ onContactOpen }: HeroSectionProps) {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-position-[65%_center] lg:bg-position-[center_20%]"
      aria-label="Hero"
      style={{
        backgroundImage: "url('/assets/images/hero-wide.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ── Overlays ──────────────────────────────────────────── */}
      {/* Mobile: uniform dark scrim */}
      <div className="absolute inset-0 bg-navy/65 lg:hidden" />
      {/* Desktop: left-to-right gradient for text legibility */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(10,25,80,0.82) 0%, rgba(10,25,80,0.60) 32%, rgba(10,25,80,0.15) 52%, transparent 65%)",
        }}
      />
      {/* Bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,25,80,0.50) 0%, transparent 30%)",
        }}
      />

      {/* ── Prayer flags ──────────────────────────────────────── */}
      <div className="absolute top-24 left-0 right-0 z-10 pointer-events-none">
        <PrayerFlags />
      </div>

      {/* ── Main content — text only, left column ─────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center min-h-screen">
        <div
          className="max-w-md lg:max-w-lg animate-hero-entrance"
          style={{ paddingTop: "clamp(200px, 26vh, 320px)", paddingBottom: "80px" }}
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-crimson uppercase mb-4">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 text-white">
            {t("heading1")}
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic leading-tight mb-5 text-white flex items-center gap-3">
            {t("heading2")}
            <svg viewBox="0 0 40 24" className="inline-block w-8 h-5 fill-white/80" aria-hidden="true">
              <polygon points="0,24 12,0 22,18 28,10 40,24" />
            </svg>
          </h1>
          <p className="text-base sm:text-lg font-medium text-white/90 mb-2">
            {t("tagline")}
          </p>
          <p className="text-sm text-white/75 leading-relaxed mb-8 max-w-sm">
            {t("body")}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                document.getElementById("nepal")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer px-6 py-3 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-navy transition-all duration-200 tracking-wide"
            >
              {t("discoverCta")} →
            </button>
            <button
              onClick={onContactOpen}
              className="cursor-pointer px-6 py-3 bg-crimson text-white text-sm font-semibold rounded-full hover:bg-crimson-dark transition-colors tracking-wide"
            >
              {t("partnerCta")}
            </button>
          </div>

          {/* "From Finland to Nepal" — below CTAs, never over the can */}
          <p className="text-white/60 text-xs italic font-medium mt-6 select-none">
            {t("fromFinland")} <span className="font-bold not-italic">{t("toNepal")}</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-pulse-soft">
        <p className="text-white/35 text-[10px] tracking-widest uppercase">{t("scroll")}</p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
