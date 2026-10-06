# HakkaLand — Restaurant & Bar Website

> Premium, animation-rich marketing website for HakkaLand, a Chinese/Asian/Cantonese restaurant & bar in Madhyamgram, Kolkata.

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # → static output in dist/
npm run preview  # → preview the built site
```

## Tech Stack

- **Astro 5** (static output) with `astro:assets` for responsive WebP images
- Plain CSS with design tokens (`src/styles/global.css`) and component-scoped styles
- A little vanilla TypeScript for the nav, menu filters, gallery lightbox and reservation form. No animation libraries.

## Project Structure

```
src/
├── assets/img/            # Restaurant photos
├── components/
│   ├── Nav.astro          # Fixed nav, solid on scroll, mobile drawer
│   ├── Hero.astro         # Full-bleed hero with key facts
│   ├── About.astro        # The space + features + photo collage
│   ├── Signatures.astro   # Six signature dish cards
│   ├── MenuSection.astro  # Tabbed menu with search + veg-only filter
│   ├── Bar.astro          # Drinks list + photo grid
│   ├── Celebrate.astro    # Group / party bookings banner
│   ├── Gallery.astro      # Photo grid + <dialog> lightbox
│   ├── Visit.astro        # Address, hours, ratings, map
│   ├── Footer.astro
│   ├── ReserveDialog.astro # Reservation form → WhatsApp message
│   ├── MobileBar.astro    # Sticky Call / WhatsApp / Reserve bar on phones
│   ├── Logo.astro, Icon.astro, VegMark.astro
├── config/site.ts         # All business details (phone, address, hours)
├── data/menu.json         # Full menu with prices
├── lib/menu.ts            # Normalises menu.json for rendering
├── layouts/Layout.astro   # Base HTML, SEO, JSON-LD
├── pages/
│   ├── index.astro        # Homepage
│   └── menu.astro         # Printable full menu
└── styles/global.css      # Tokens, typography, buttons, base styles
```

## Editing content

- **Business details** (phone, hours, address, ratings, socials): `src/config/site.ts`
- **Menu and prices**: `src/data/menu.json`. The homepage menu and `/menu` both read from it.
- **Signature dishes**: the `dishes` list at the top of `src/components/Signatures.astro`
- **Gallery photos**: the `photos` list in `src/components/Gallery.astro`

## Design

Warm near-black background, brick-amber accents and the neon-pink of the HakkaLand sign. Fraunces (display serif) + Manrope (body). Layout is a centred 1200px container with consistent section spacing; everything collapses cleanly to one column on phones.

## TODO for the Owner

> [!IMPORTANT]
> The following items need real data from the restaurant owner:

- [ ] **Opening hours** — Currently showing "12 PM – 11 PM" as placeholder. Confirm in `src/config/site.ts`
- [ ] **Social media links** — Instagram, Zomato, District URLs (currently `#` placeholders)
- [ ] **Google reviews** — Share a few real reviews if you'd like a testimonials section (none are shown until then)
- [ ] **Alcohol/cocktail menu** — Not provided; the bar section describes drinks in words only
- [ ] **Logo vector** — If an SVG/vector version of the HakkaLand logo exists, replace the text-based wordmark
- [ ] **Google Maps embed** — Update the embed URL in `src/config/site.ts` with the actual business listing
- [ ] **Menu PDF** — Generate a PDF version of the menu for download
- [ ] **OG image** — Generate a 1200×630 image from the hero + neon wordmark for social sharing

## Accessibility

- All text/background pairs meet WCAG AA contrast
- `prefers-reduced-motion` respected
- Semantic HTML headings throughout
- Alt text on every image
- Keyboard-accessible lightbox and modal (focus trap, Escape to close)
- Skip-to-content link
- Indian veg/non-veg indicators (green dot / red triangle)

## Performance Targets

- Lighthouse Performance ≥ 90 on mobile
- CLS < 0.05
- Total JS < 150 KB gzipped
- Images: WebP with responsive srcset, lazy loading below fold
- Font display: swap with preloaded critical weights

## License

Private — built for HakkaLand Restaurant.
