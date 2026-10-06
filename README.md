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

- **Astro 5** (static output)
- **GSAP 3** with ScrollTrigger (scroll-driven animations)
- **Lenis** (smooth scrolling)
- **SplitType** (text splitting for animations)
- **Sharp** (image optimization — AVIF/WebP, responsive srcset)
- Vanilla TypeScript — no React/Vue

## Project Structure

```
src/
├── assets/img/          # Restaurant photos (33 images)
├── components/
│   ├── ArchFrame.astro      # SVG arch clip-path with ember LED trace
│   ├── ChopSeal.astro       # "BEST SELLER" stamp badge
│   ├── FretCorner.astro     # Chinese key-fret corner ornament
│   ├── Footer.astro         # Site footer with neon wordmark
│   ├── MobileActionBar.astro # Sticky Call/WhatsApp/Directions bar
│   ├── Nav.astro            # Glass nav bar with mobile overlay
│   ├── NeonText.astro       # Flickering neon text effect
│   ├── ReserveModal.astro   # Reservation form → WhatsApp
│   ├── TileField.astro      # Peranakan tile pattern background
│   └── sections/
│       ├── Preloader.astro       # SVG wordmark draw + neon flicker
│       ├── Hero.astro            # Full-viewport hero with Ken Burns
│       ├── MarqueeBand.astro     # Two-row infinite marquee
│       ├── Story.astro           # "Under the Arches" pinned section
│       ├── SignatureDishes.astro # Horizontal scroll dish cards
│       ├── TheSizzle.astro       # Cinematic brownie sizzle moment
│       ├── InteractiveMenu.astro # Full menu with search/filter
│       ├── TheBar.astro          # Drink bento grid + wave effects
│       ├── DayNight.astro        # Drag comparison slider
│       ├── Celebrate.astro       # Event cards + WhatsApp CTA
│       ├── Gallery.astro         # Masonry grid + lightbox
│       ├── LoveNotes.astro       # Testimonials + rating counters
│       └── Visit.astro           # Map + contact info
├── config/
│   └── site.ts           # All business details (phone, address, hours)
├── data/
│   └── menu.json         # Full menu with prices
├── layouts/
│   └── Layout.astro      # Base HTML with SEO + JSON-LD
├── pages/
│   ├── index.astro       # Homepage (all sections)
│   └── menu.astro        # Printable menu page
└── styles/
    └── global.css        # Design tokens, typography, base styles
```

## Pages

| Route | Description |
|---|---|
| `/` | Main single-page site with all 13 sections |
| `/menu` | Printable full menu (Ctrl+P friendly) |

## Design Concept: "Neon under the Arches"

The site recreates the experience of walking into HakkaLand from the mall at night — the neon sign flickers on, you pass under glowing brick arches onto patterned tiles, food sizzles, and the bar glows at the back.

## TODO for the Owner

> [!IMPORTANT]
> The following items need real data from the restaurant owner:

- [ ] **Opening hours** — Currently showing "12 PM – 11 PM" as placeholder. Confirm in `src/config/site.ts`
- [ ] **Social media links** — Instagram, Zomato, District URLs (currently `#` placeholders)
- [ ] **Google reviews** — Replace the 3 placeholder testimonials (marked `data-placeholder="true"`) with real Google reviews
- [ ] **Alcohol/cocktail menu** — Not provided; the bar section describes drinks in words only
- [ ] **Logo vector** — If an SVG/vector version of the HakkaLand logo exists, replace the text-based wordmark
- [ ] **Google Maps embed** — Update the embed URL in `src/config/site.ts` with the actual business listing
- [ ] **Sizzle sound effect** — Add a royalty-free sizzle sound at `public/sounds/sizzle.mp3` (< 60 KB)
- [ ] **Menu PDF** — Generate a PDF version of the menu for download
- [ ] **OG image** — Generate a 1200×630 image from the hero + neon wordmark for social sharing

## Accessibility

- All text/background pairs meet WCAG AA contrast
- `prefers-reduced-motion` respected: disables flicker, parallax, pinning, smooth scroll
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
