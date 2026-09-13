"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyNepalSection() {
  const t = useTranslations("whyNepal");

  const pillars = [
    {
      num: "01",
      title: t("pillar1Title"),
      body: t("pillar1Body"),
    },
    {
      num: "02",
      title: t("pillar2Title"),
      body: t("pillar2Body"),
    },
    {
      num: "03",
      title: t("pillar3Title"),
      body: t("pillar3Body"),
    },
  ];

  return (
    <section id="why-nepal" className="bg-[#09090f] overflow-x-hidden" aria-labelledby="why-nepal-heading">

      {/* ── 1. EDITORIAL HERO ───────────────────────────────── */}
      <div
        className="relative min-h-[92vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/nepal.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* layered scrims */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40">
          <ScrollReveal>
            <p className="text-crimson text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
              {t("eyebrow")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="why-nepal-heading"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-extrabold text-white leading-[0.95] tracking-tight mb-7 max-w-4xl"
            >
              {t("heroHeading")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              {t("heroBody")}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── 2. STORY 1 — WORLD'S #1 LUXURY HOTEL ───────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div
          className="relative min-h-[60vh] lg:min-h-0"
          style={{
            backgroundImage: "url('/assets/images/real-mustang.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30 lg:to-black/50" />
          {/* floating caption */}
          <div className="absolute bottom-6 left-6">
            <p className="text-white/40 text-[10px] tracking-widest uppercase">
              {t("s1Location")}
            </p>
          </div>
        </div>

        {/* Text */}
        <ScrollReveal direction="right">
          <div className="relative bg-[#0d0d1a] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center min-h-[60vh] overflow-hidden">
            {/* giant decorative #1 */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-6 -right-4 text-[200px] font-black leading-none text-white/3"
            >
              #1
            </span>

            <p className="text-crimson text-[10px] font-bold tracking-[0.3em] uppercase mb-3 relative z-10">
              {t("s1Eyebrow")}
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-white leading-none mb-1 relative z-10">
              {t("s1Stat")}
            </p>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6 relative z-10">
              {t("s1StatSub")}
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 relative z-10">
              {t("s1Heading")}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5 relative z-10">
              {t("s1Body")}
            </p>
            <p className="text-white/40 text-sm leading-relaxed relative z-10 border-l-2 border-crimson/40 pl-4 italic">
              {t("s1Connect")}
            </p>
            <a
              href="https://thetourismtimes.com/news/travel-leisure/nepals-shinta-mani-mustang-named-worlds-best-luxury-hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-[10px] text-white/25 hover:text-white/50 transition-colors tracking-widest uppercase relative z-10 w-fit"
            >
              {t("sourceLabel")} ↗
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* ── 3. STORY 2 — #40 NIGHTLIFE ─────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text (left on desktop) */}
        <ScrollReveal direction="left">
          <div className="relative bg-[#110a14] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center min-h-[60vh] overflow-hidden order-2 lg:order-1">
            {/* giant decorative #40 */}
            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-8 -left-4 text-[200px] font-black leading-none text-white/3"
            >
              40
            </span>

            <p className="text-[#a855f7] text-[10px] font-bold tracking-[0.3em] uppercase mb-3 relative z-10">
              {t("s2Eyebrow")}
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-white leading-none mb-1 relative z-10">
              {t("s2Stat")}
            </p>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6 relative z-10">
              {t("s2StatSub")}
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 relative z-10">
              {t("s2Heading")}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4 relative z-10">
              {t("s2Body")}
            </p>
            <p className="text-white/40 text-sm leading-relaxed relative z-10 border-l-2 border-[#a855f7]/40 pl-4 italic">
              {t("s2Connect")}
            </p>
            <a
              href="https://www.clublod.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-[10px] text-white/25 hover:text-white/50 transition-colors tracking-widest uppercase relative z-10 w-fit"
            >
              {t("sourceLabel")} ↗
            </a>
          </div>
        </ScrollReveal>

        {/* Image (right on desktop) */}
        <div
          className="relative min-h-[60vh] lg:min-h-0 order-1 lg:order-2"
          style={{
            backgroundImage: "url('/assets/images/real-nightclub-dj.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/40 lg:to-black/50" />
          <div className="absolute bottom-6 right-6">
            <p className="text-white/40 text-[10px] tracking-widest uppercase text-right">
              {t("s2Location")}
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. STORY 3 — EXPERIENCE DESTINATION ────────────── */}
      <div
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/real-kathmandu-sunset.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                {t("s3Heading")}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-white/80 text-lg sm:text-xl font-medium mb-6 italic">
                "{t("s3Tagline")}"
              </p>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-white/55 text-sm leading-relaxed">
                {t("s3Body")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── 5. STORY 4 — TEST MARKET (3 pillars) ───────────── */}
      <div className="bg-[#07070e] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-crimson text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              {t("s4Eyebrow")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
              {t("s4Heading")}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-2xl mb-16">
              {t("s4Body")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 80}>
                <div
                  className={`p-8 sm:p-10 flex flex-col gap-4 ${
                    i < 2 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""
                  }`}
                >
                  <span className="text-[11px] font-black tracking-[0.3em] text-white/20 uppercase">
                    {p.num}
                  </span>
                  <h4 className="text-lg font-extrabold text-white tracking-wide uppercase">
                    {p.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. FINAL ARGUMENT ───────────────────────────────── */}
      <div
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/real-kathmandu-sunset.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <ScrollReveal>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-white leading-[0.95] tracking-tight mb-8">
              {t("finalHeading")}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {t("finalBody")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="inline-flex flex-col items-center gap-1 border border-white/20 rounded-2xl px-10 py-6">
              <span className="text-white font-extrabold text-xl sm:text-2xl tracking-wide">
                {t("finalTagline1")}
              </span>
              <span className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase">
                {t("finalTagline2")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
}
