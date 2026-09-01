import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hartwall Long Drink — Coming Soon to Nepal",
  description:
    "Finland's iconic Original Long Drink, crafted by Hartwall, is arriving in Nepal. Discover five vibrant flavors — the Nordic classic, reimagined for the Himalayas.",
  openGraph: {
    title: "Hartwall Long Drink — Coming Soon to Nepal",
    description:
      "Finland's iconic Original Long Drink is arriving in Nepal. Five vibrant flavors of the Nordic classic, coming soon.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
