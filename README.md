# Hartwall Long Drink — Coming Soon to Nepal

A single-page coming-soon site announcing the arrival of Hartwall Original Long Drink in Nepal. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
  layout.tsx        Root layout — loads Poppins font, sets metadata
  page.tsx          Page shell (Server Component) composing Hero → ComingSoon → Footer
  globals.css       Tailwind v4 directives, custom keyframes, CSS variables
components/
  Hero.tsx          "use client" — state owner for activeColor, renders background + carousel
  ParallaxBackground.tsx  "use client" — 3-layer parallax bg, flavor-tinted gradient
  FlavorCarousel.tsx      "use client" — crossfade can images + dot selectors + auto-play
  ComingSoon.tsx    Server Component — "Coming Soon to Nepal" announcement block
  SiteFooter.tsx    Server Component — legal/trademark disclaimer (verbatim)
lib/
  flavors.ts        Flavor data array (name, hex color, image path)
public/
  assets/cans/      Product can images (webp) — one file per flavor
```

## Swapping in real product images

When licensed product photography is available:

1. Drop the new transparent PNG/WebP files into `public/assets/cans/`
2. Update the `image` field for each entry in `lib/flavors.ts` to the new filename
3. That's it — the carousel and all metadata update automatically

## Flavor color customisation

Each flavor drives the hero background tint via its `color` hex in `lib/flavors.ts`. Adjust colors there to match final brand guidelines.

## Editing placeholder copy

The "Coming Soon" copy in `components/ComingSoon.tsx` is marked with `{/* Placeholder copy */}` comments. Replace with final client-supplied text before launch.
