"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Nav from "@/components/Nav";
import ContactModal from "@/components/ContactModal";
import HeroSection from "@/components/sections/HeroSection";
import BrandSection from "@/components/sections/BrandSection";
import FlavoursSection from "@/components/sections/FlavoursSection";
import NepalSection from "@/components/sections/NepalSection";
import PartnerSection from "@/components/sections/PartnerSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <Nav onContactOpen={() => setContactOpen(true)} />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <main>
        <HeroSection onContactOpen={() => setContactOpen(true)} />
        <BrandSection />
        <FlavoursSection />
        <NepalSection />
        <PartnerSection onContactOpen={() => setContactOpen(true)} />
      </main>
      <SiteFooter onContactOpen={() => setContactOpen(true)} />
    </>
  );
}
