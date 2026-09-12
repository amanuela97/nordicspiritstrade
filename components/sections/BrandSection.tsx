"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BrandSection() {
  const t = useTranslations("brand");

  const FEATURES = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M12 2 L9 8 L3 9 L7.5 13.5 L6.5 20 L12 17 L17.5 20 L16.5 13.5 L21 9 L15 8 Z" />
        </svg>
      ),
      title: t("featureOriginTitle"),
      desc: t("featureOriginDesc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M6 3 L18 3 L22 12 L12 21 L2 12 Z" />
        </svg>
      ),
      title: t("featureQualityTitle"),
      desc: t("featureQualityDesc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      title: t("featureTasteTitle"),
      desc: t("featureTasteDesc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
          <path d="M3 18 L8 6 L12 14 L16 8 L21 18" />
        </svg>
      ),
      title: t("featureStoryTitle"),
      desc: t("featureStoryDesc"),
    },
  ];

  return (
    <section
      id="brand"
      className="bg-cream py-20 sm:py-28 overflow-hidden"
      aria-labelledby="brand-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-2 text-center lg:text-left">
            {t("eyebrow")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={80}>
              <h2 id="brand-heading" className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-5">
                {t("heading")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-text-muted text-base leading-relaxed mb-5">{t("body1")}</p>
              <p className="text-text-muted text-base leading-relaxed mb-7">{t("body2")}</p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <button
                onClick={() => document.getElementById("flavours")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-crimson transition-colors tracking-wide"
              >
                {t("storyCta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </ScrollReveal>
          </div>

          {/* Center: Helsinki photo — explicit px dimensions, no fill */}
          <div className="lg:col-span-1 flex justify-center">
            <ScrollReveal delay={100} direction="fade">
              <div className="group cursor-pointer overflow-hidden rounded-sm shadow-xl max-w-xs w-full">
                {/* Polaroid frame */}
                <div className="relative bg-[#f5f0e8] p-3 pb-10 shadow-2xl">
                  <div className="overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src="/assets/images/helsinki-1952.jpg"
                      alt="Helsinki 1952 Olympics — where Hartwall Long Drink was born"
                      width={294}
                      height={220}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="294px"
                    />
                  </div>
                  <p className="absolute bottom-3 right-4 italic text-base text-[#4a3728] select-none opacity-80">
                    {t("photoCaption")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: features */}
          <div className="lg:col-span-1 space-y-6">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80} direction="right">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-navy/20 flex items-center justify-center text-navy shrink-0 bg-white">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{f.title}</p>
                    <p className="text-text-muted text-sm">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
