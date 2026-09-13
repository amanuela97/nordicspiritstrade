"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function LoadingScreen() {
  const t = useTranslations("loading");
  const [phase, setPhase] = useState<"visible" | "exiting" | "gone">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exiting"), 1800);
    const t2 = setTimeout(() => setPhase("gone"), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-navy transition-opacity duration-500 ${
        phase === "exiting" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Logo */}
      <div className="animate-loading-fade relative w-56 h-20 mb-6">
        <Image
          src="/assets/custom-logo/logo-horizontal-white-for-dark-bg.png"
          alt="Nordic Spirits Trade"
          fill
          className="object-contain"
          priority
          sizes="224px"
        />
      </div>

      {/* Tagline */}
      <p
        className="animate-loading-fade text-off-white/60 text-xs tracking-[0.3em] uppercase"
        style={{ animationDelay: "0.2s" }}
      >
        {t("tagline")}
      </p>

      {/* Loading bar */}
      <div className="mt-8 w-32 h-px bg-white/20 overflow-hidden rounded-full">
        <div
          className="h-full bg-crimson animate-pulse-soft"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
