"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_mr_g_10/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/flx/warn/?u=https%3A%2F%2Fwww.instagram.com%2F_u%2F_mr_g_10%3Ffbclid%3DIwAR2E1LL6f0gdSzB1A6WrmQhgIW-BmnkHxRT-o83yuNIMlb-vlyc32m24RU0&h=AUDBdbH6KK4nUMhN1syICIw2bPVTZ2XwtqaeVYE-Dp_z96VOGJhKLoY9Qdu2nQchx_92Y5J4mOpYw7iiw_d6LUEaYJznf4KBpV5NEotO-H8mqmtltyPvAUyGfJaHjhrJ7D2FS671n-xRoOu5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Mr.G10",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function SiteFooter({ onContactOpen }: { onContactOpen: () => void }) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tf = useTranslations("flavours");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NAV_LINKS = [
    { label: tn("home"), id: "home" },
    { label: tn("brand"), id: "brand" },
    { label: tn("flavours"), id: "flavours" },
    { label: tn("nepal"), id: "nepal" },
    { label: tn("partner"), id: "partner" },
  ];

  const PRODUCT_LINKS = [
    tf("items.gingrapefruit.name"),
    tf("items.raspberry.name"),
    tf("items.lemonade.name"),
    tf("items.orange.name"),
    tf("items.pineapple.name"),
    tf("items.glogg.name"),
  ];

  return (
    <footer id="contact" className="bg-navy text-off-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative w-44 h-14 mb-5">
              <Image src="/assets/custom-logo/logo-horizontal-white-for-dark-bg.png" alt="Nordic Spirits Trade" fill className="object-contain object-left" sizes="(max-width: 768px) 180px, 256px" />
            </div>
            <p className="text-off-white/60 text-sm leading-relaxed max-w-xs mb-5">{t("about")}</p>
            <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-off-white/70 hover:text-white hover:border-white/50 transition-colors">
                {s.icon}
              </a>
            ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-off-white/50 mb-4">{t("navTitle")}</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="cursor-pointer text-sm text-off-white/70 hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-off-white/50 mb-4">{t("productsTitle")}</p>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((name) => (
                <li key={name}>
                  <button onClick={() => scrollTo("flavours")} className="cursor-pointer text-sm text-off-white/70 hover:text-white transition-colors text-left">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-off-white/50 mb-4">{t("contactTitle")}</p>
            <ul className="space-y-3 mb-5">
              <li>
                <a href="mailto:director@nordicspiritstrade.com" className="cursor-pointer text-sm text-off-white/70 hover:text-white transition-colors break-all">
                  director@nordicspiritstrade.com
                </a>
              </li>
              <li>
                <a href="tel:+358452067538" className="cursor-pointer text-sm text-off-white/70 hover:text-white transition-colors">
                  +358 45 206 7538
                </a>
              </li>
              <li className="text-sm text-off-white/60">Kathmandu, Nepal<br />Helsinki, Finland</li>
            </ul>
            <button onClick={onContactOpen} className="cursor-pointer px-5 py-2.5 bg-crimson text-white text-xs font-bold rounded-full hover:bg-crimson-dark transition-colors tracking-wide">
              {t("partnerCta")}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <p className="text-[10px] sm:text-xs text-off-white/40 leading-relaxed text-center mb-4 max-w-3xl mx-auto">
          {t("disclaimer")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-off-white/40">
          <p>{t("alcohol")}</p>
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} {t("rights")}
            <span className="text-off-white/20">·</span>
            {t("tagline")} ❄️
          </p>
        </div>
      </div>
    </footer>
  );
}
