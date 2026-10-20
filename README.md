# Product site skeleton

A multi-page Next.js + TypeScript product site for a physical product. The starter uses Tailwind CSS, Framer Motion, and Lucide React, with every editable content value centralized in `lib/content.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to edit

- `lib/content.ts` — product name, navigation, features, specs, FAQs, testimonials, process steps, and placeholder copy.
- `app/globals.css` — global brand colors, typography scale, background treatment, and reusable utility classes.
- `components/site/navbar.tsx` and `components/site/footer.tsx` — shared navigation and footer.
- `components/ui` — reusable buttons, cards, section headings, accordion, and lightbox.
- `public/placeholders` — replace the SVG placeholder art with product photography while keeping the same file names, or update the paths in `lib/content.ts`.

## Add a page

Create `app/your-route/page.tsx`, add the route to `navItems` in `lib/content.ts`, and reuse `PageIntro`, `Container`, and the UI primitives for consistent spacing and behavior. Add page-specific metadata with an exported `metadata` object.

## Change the brand

Update the CSS variables at the top of `app/globals.css`:

- `--accent` is the single brand accent used throughout the interface.
- `--accent-strong` is the hover/highlight version.
- `--canvas`, `--surface`, and `--ink` control the dark theme.

The font pair is configured in `app/layout.tsx` with `Inter` and `Space Grotesk`.

## Placeholder checkout

The Buy / Pre-order buttons intentionally stop at a placeholder action. Connect `handlePurchase` in `components/product/product-purchase.tsx` to Shopify, Stripe, or another service when the product flow is ready.
