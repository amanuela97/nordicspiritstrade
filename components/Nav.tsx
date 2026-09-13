"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { setLocale } from "@/app/actions/locale";

const LANG_OPTIONS = [
  { code: "en", label: "EN", name: "English" },
  { code: "fi", label: "FI", name: "Suomi" },
  { code: "ne", label: "NE", name: "नेपाली" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Nav({ onContactOpen }: { onContactOpen: () => void }) {
  const t = useTranslations("nav");
  const currentLocale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { label: t("home"), id: "home" },
    { label: t("brand"), id: "brand" },
    { label: t("flavours"), id: "flavours" },
    { label: t("nepal"), id: "nepal" },
    { label: t("whyNepal"), id: "why-nepal" },
    { label: t("partner"), id: "partner" },
    { label: t("contact"), id: "contact" },
  ];

  /* scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const map = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => map.set(e.target.id, e));
        const visible = [...map.values()]
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { threshold: 0.2, rootMargin: "-96px 0px -40% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mobileRef.current?.contains(e.target as Node)) setMobileOpen(false);
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLink = (id: string) => {
    setMobileOpen(false);
    if (id === "contact") onContactOpen();
    else smoothScrollTo(id);
  };

  const handleLocale = (code: string) => {
    setLangOpen(false);
    startTransition(async () => {
      await setLocale(code);
      router.refresh();
    });
  };

  const isDark = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-linear-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleLink("home")}
            className="relative h-16 w-64 shrink-0 cursor-pointer"
            aria-label="Go to top"
          >
            <Image
              src={
                scrolled
                  ? "/assets/custom-logo/logo-horizontal-color.png"
                  : "/assets/custom-logo/logo-horizontal-white-for-dark-bg.png"
              }
              alt="Nordic Spirits Trade"
              fill
              className="object-contain object-left"
              priority
              loading="eager"
              sizes="(max-width: 768px) 180px, 256px"
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, id }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  onClick={() => handleLink(id)}
                  className={`relative cursor-pointer px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors rounded
                    ${isDark ? "text-white/90 hover:text-white" : "text-navy hover:text-crimson"}
                    ${isActive ? (isDark ? "font-semibold text-white" : "font-semibold text-navy") : ""}
                  `}
                >
                  {label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        isDark ? "bg-white" : "bg-crimson"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: language picker + hamburger */}
          <div className="flex items-center gap-3" ref={langRef}>
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-label={t("language")}
                aria-expanded={langOpen}
                className={`cursor-pointer flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-all ${
                  isDark
                    ? "border-white/30 text-white/80 hover:border-white hover:text-white"
                    : "border-gray-200 text-navy hover:border-navy"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {currentLocale.toUpperCase()}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  {LANG_OPTIONS.map(({ code, label, name }) => (
                    <button
                      key={code}
                      onClick={() => handleLocale(code)}
                      className={`cursor-pointer flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors hover:bg-cream ${
                        currentLocale === code
                          ? "text-crimson font-semibold bg-cream/60"
                          : "text-navy"
                      }`}
                    >
                      <span>{name}</span>
                      <span className="text-xs text-text-muted">{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger + active-section label (mobile only) */}
            <div className="lg:hidden flex items-center gap-1.5">
              {/* Show the active section name when drawer is closed */}
              {!mobileOpen && activeId !== "home" && (
                <span
                  className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                    isDark ? "text-white/60" : "text-navy/60"
                  }`}
                >
                  {NAV_LINKS.find((l) => l.id === activeId)?.label ?? ""}
                </span>
              )}
              <button
                className="cursor-pointer p-2"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <div className="w-6 space-y-1.5">
                  {[
                    mobileOpen ? "rotate-45 translate-y-2" : "",
                    mobileOpen ? "opacity-0" : "",
                    mobileOpen ? "-rotate-45 -translate-y-2" : "",
                  ].map((extra, i) => (
                    <span
                      key={i}
                      className={`block h-0.5 transition-transform ${
                        isDark ? "bg-white" : "bg-navy"
                      } ${extra}`}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <nav className="py-2" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleLink(id)}
                className={`cursor-pointer block w-full text-left px-6 py-3.5 text-sm font-medium transition-colors hover:bg-cream ${
                  activeId === id ? "text-crimson font-semibold" : "text-navy"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="border-t border-gray-100 mx-4 mt-2 pt-2 pb-1 flex gap-2">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => handleLocale(code)}
                  className={`cursor-pointer flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                    currentLocale === code
                      ? "bg-navy text-white"
                      : "bg-cream text-navy hover:bg-cream-dark"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
