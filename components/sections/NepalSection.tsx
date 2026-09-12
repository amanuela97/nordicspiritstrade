"use client";

import { useTranslations } from "next-intl";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * All figures below come from official / authoritative sources.
 * Each card is clickable — opens the source URL in a new tab.
 */
const STATS = [
  {
    value: 1100000,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M21 3H3l8 9.46V19l4 2v-8.54L21 3Z" />
      </svg>
    ),
    labelKey: "stat1Label" as const,
    subKey:   "stat1Sub"   as const,
    source:   "https://www.tourism.gov.np/",
    sourceName: "Nepal Tourism Board",
  },
  {
    value: 4800,
    suffix: "+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    labelKey: "stat2Label" as const,
    subKey:   "stat2Sub"   as const,
    source:   "https://www.tourismdepartment.gov.np/",
    sourceName: "Nepal Tourism Dept",
  },
  {
    value: 16,
    suffix: "M+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    labelKey: "stat3Label" as const,
    subKey:   "stat3Sub"   as const,
    source:   "https://censusnepal.cbs.gov.np/",
    sourceName: "CBS Nepal Census 2021",
  },
  {
    value: 7,
    suffix: "%+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    labelKey: "stat4Label" as const,
    subKey:   "stat4Sub"   as const,
    source:   "https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=NP",
    sourceName: "World Bank Nepal",
  },
];

export default function NepalSection() {
  const t = useTranslations("nepal");

  return (
    <section id="nepal" className="bg-cream-dark py-20 sm:py-28 overflow-hidden" aria-labelledby="nepal-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("eyebrow")}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 id="nepal-heading" className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-5">
                {t("heading")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-text-muted text-base leading-relaxed mb-10">{t("body")}</p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {STATS.map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <a
                    href={s.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Source: ${s.sourceName}`}
                    className="group block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full hover:border-navy/30 hover:shadow-md transition-all"
                  >
                    <div className="text-navy mb-3">{s.icon}</div>
                    <div className="text-xl sm:text-3xl font-extrabold text-navy mb-1">
                      <AnimatedCounter target={s.value} suffix={s.suffix} duration={2000} />
                    </div>
                    <p className="text-navy text-xs font-semibold leading-tight mb-1">
                      {t(s.labelKey)}
                    </p>
                    <p className="text-text-muted text-xs leading-snug mb-2">{t(s.subKey)}</p>
                    <p className="text-[11px] text-navy/45 group-hover:text-crimson transition-colors flex items-center gap-1">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                      </svg>
                      {s.sourceName}
                    </p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right CTA card */}
          <ScrollReveal delay={160} direction="right">
            <div className="relative rounded-3xl overflow-hidden bg-navy min-h-[380px] flex flex-col justify-between p-8 sm:p-10 shadow-2xl">
              <div
                className="absolute inset-0 bg-center bg-cover opacity-20"
                style={{ backgroundImage: "url('/assets/images/nepal-mountains-dark.jpg')" }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("ctaEyebrow")}</p>
                <h3 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">{t("ctaHeading")}</h3>
                <p className="text-off-white/70 text-sm sm:text-base leading-relaxed max-w-sm mb-8">{t("ctaBody")}</p>
                <a
                  href={`mailto:${t("ctaEmail")}`}
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy text-sm font-bold rounded-full hover:bg-cream transition-colors tracking-wide"
                >
                  {t("ctaButton")} →
                </a>
              </div>
              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 space-y-1">
                <p className="text-off-white/50 text-xs">📧 {t("ctaEmail")}</p>
                <p className="text-off-white/50 text-xs">📞 +358 45 206 7538</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
