"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { flavors } from "@/lib/flavors";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Flavor key → message key mapping
const FLAVOR_KEYS = [
  "gingrapefruit",
  "raspberry",
  "lemonade",
  "orange",
  "pineapple",
  "glogg",
] as const;

export default function FlavoursSection() {
  const t = useTranslations("flavours");
  const [expanded, setExpanded] = useState<number | null>(null);

  const occasions = t.raw("occasions") as string[];

  return (
    <section
      id="flavours"
      className="relative bg-navy-mid overflow-hidden py-20 sm:py-28"
      aria-labelledby="flavours-heading"
    >
      {/* Subtle mountain bg */}
      <div className="absolute inset-0 opacity-15">
        <Image src="/assets/images/nepal-mountains-dark.jpg" alt="" fill className="object-cover object-center" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("eyebrow")}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 id="flavours-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t("heading1")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white/70 leading-tight">
              {t("heading2")}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
          {/* Flavor grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {flavors.map((flavor, i) => {
              const key = FLAVOR_KEYS[i];
              const isExpanded = expanded === i;
              return (
                <ScrollReveal key={flavor.image} delay={i * 60}>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : i)}
                    className="cursor-pointer group relative w-full text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-expanded={isExpanded}
                    aria-label={`${t(`items.${key}.name`)} — ${isExpanded ? "collapse" : "expand"}`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: `radial-gradient(ellipse at 50% 100%, ${flavor.color}, transparent 70%)` }}
                    />
                    <div className="relative h-40 sm:h-52 flex items-end justify-center pt-4 pb-0">
                      <div className="can-shimmer relative w-24 sm:w-32 h-36 sm:h-48">
                        <Image
                          src={flavor.image}
                          alt={`${t(`items.${key}.name`)} Hartwall Long Drink`}
                          fill
                          className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                          loading="eager"
                          sizes="(max-width: 640px) 96px, 128px"
                        />
                      </div>
                    </div>
                    <div className="px-3 pb-3 pt-2 text-center">
                      <span
                        className="inline-block text-[10px] font-bold tracking-widest uppercase mb-0.5 px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${flavor.color}22`, color: flavor.color }}
                      >
                        {t(`items.${key}.subtitle`)}
                      </span>
                      <p className="text-white text-xs sm:text-sm font-semibold mt-0.5">
                        {t(`items.${key}.name`)}
                      </p>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="px-3 pb-3 border-t border-white/10 pt-2">
                        <p className="text-white/70 text-xs leading-relaxed">{t(`items.${key}.note`)}</p>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Perfect for Nepal's moments */}
          <ScrollReveal delay={200} direction="right" className="lg:w-72 xl:w-80 shrink-0">
            <div className="bg-navy/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7">
              <p className="text-crimson text-[10px] font-bold tracking-widest uppercase mb-2">{t("occasionsEyebrow")}</p>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold mb-5 leading-tight">{t("occasionsHeading")}</h3>
              <ul className="space-y-3">
                {occasions.map((o: string) => (
                  <li key={o} className="flex items-center gap-3 text-white/80 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c11c2b" strokeWidth="2.5" strokeLinecap="round" className="shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-6 relative h-28 rounded-xl overflow-hidden">
                <Image src="/assets/images/lifestyle-nepal.jpg" alt="Friends enjoying Hartwall Long Drink in Nepal" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-white/40 text-xs mt-8 tracking-wide">{t("tapHint")}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
