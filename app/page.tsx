import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hartwall Long Drink — Coming Soon to Nepal",
  description:
    "Finland's iconic Original Long Drink, crafted by Hartwall, is arriving in Nepal. Discover six vibrant flavors — the Nordic classic, reimagined for the Himalayas.",
  openGraph: {
    title: "Hartwall Long Drink — Coming Soon to Nepal",
    description:
      "Finland's iconic Original Long Drink is arriving in Nepal. Six vibrant flavors of the Nordic classic, coming soon.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ComingSoon />
      <SiteFooter />
    </main>
  );
}
