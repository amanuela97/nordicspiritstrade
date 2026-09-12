"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PartnerSectionProps {
  onContactOpen: () => void;
}

export default function PartnerSection({ onContactOpen }: PartnerSectionProps) {
  const t = useTranslations("partner");

  const BENEFITS = [
    { icon: "❄️", title: t("benefit1Title"), sub: t("benefit1Sub") },
    { icon: "🥂", title: t("benefit2Title"), sub: t("benefit2Sub") },
    { icon: "⭐", title: t("benefit3Title"), sub: t("benefit3Sub") },
  ];

  return (
    <section id="partner" className="relative overflow-hidden py-20 sm:py-28 bg-navy" aria-labelledby="partner-heading">
      <div className="absolute inset-0">
        <Image src="/assets/images/lifestyle-nepal.jpg" alt="" fill className="object-cover object-center opacity-20" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("eyebrow")}</p>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <h2 id="partner-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {t("heading")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="text-off-white/70 text-base leading-relaxed mb-8 max-w-lg">{t("body")}</p>
            </ScrollReveal>
            <div className="space-y-4 mb-8">
              {BENEFITS.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 70}>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{b.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{b.title}</p>
                      <p className="text-off-white/60 text-xs">{b.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={240}>
              <button
                onClick={onContactOpen}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-navy transition-all duration-200 tracking-wide"
              >
                {t("cta")} →
              </button>
            </ScrollReveal>
          </div>

          {/* Right CTA card */}
          <ScrollReveal delay={160} direction="right">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-10">
              <p className="text-crimson text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("cardEyebrow")}</p>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">{t("cardHeading")}</h3>
              <p className="text-off-white/70 text-sm leading-relaxed mb-6">{t("cardBody")}</p>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:director@nordicspiritstrade.com"
                  className="cursor-pointer flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  director@nordicspiritstrade.com
                </a>
                <a
                  href="tel:+358452067538"
                  className="cursor-pointer flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.86-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                  </svg>
                  +358 45 206 7538
                </a>
                <p className="flex items-center gap-3 text-white/60 text-xs">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t("location")}
                </p>
              </div>
              <button
                onClick={onContactOpen}
                className="cursor-pointer w-full py-3.5 bg-crimson text-white text-sm font-bold rounded-full hover:bg-crimson-dark transition-colors tracking-wide"
              >
                {t("cardButton")} →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
