import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Serve AVIF first (best compression), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // Device breakpoints that match real mobile widths
    deviceSizes: [390, 430, 640, 750, 828, 1080, 1200, 1920],
    // Slot sizes used for smaller images (cans, logos)
    imageSizes: [64, 128, 160, 224, 320, 480],
    // Minimum TTL for cached optimised images: 7 days
    minimumCacheTTL: 604800,
  },
};

export default withNextIntl(nextConfig);
