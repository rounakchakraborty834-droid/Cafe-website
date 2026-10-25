# Daybook Café — Vayora Concept Website

A premium, responsive, editorial café concept designed as a reusable Vayora sales demo. **Daybook Café is fictional.** All sample menu names, prices, reviews, contact details, address and opening hours are placeholders. Replace them before any real-world deployment.

## What is included

- A complete one-page café experience: hero, story, signature coffee, category-filtered menu, scroll-story, photography gallery, craft, visit occasions, seasonal feature, labelled sample reviews, visit details, inquiry form, journal previews and footer.
- A separate, data-driven journal article page at `journal.html?article=...`.
- A single central configuration in `src/config.js` for brand, palette, type, content, menu, featured items, contact methods, gallery, journal, review visibility, demo state and Vayora attribution.
- GSAP + ScrollTrigger scroll reveals, crop/mask transitions, gentle parallax and a scroll-scrubbed three-scene story when the CDN is available. A reduced-motion setting and a content-first fallback keep the page usable when animation scripts are not available.
- A keyboard- and touch-friendly image lightbox; responsive navigation; category filters; accessible form validation; contextual email/WhatsApp draft generation when real contact values are configured.
- Documentation for customization, animation, skill audit, photography credits and test scope.

## Run locally

Requirements: Node.js 18 or newer. No build step or package installation is required for the current static version.

```bash
npm start
```

Open `http://127.0.0.1:4173`. To run the bundled static checks:

```bash
npm test
```

The local preview server only serves project files and supports GET/HEAD requests. It does not submit inquiries or provide a booking backend.

## Rebrand in one place

1. Open `src/config.js`.
2. Replace the brand name, tagline, palette, font family names, location labels, story copy, menu items/prices, signature feature, seasonal content, gallery, journal articles and social links.
3. Add verified business data to `contact`: real phone, WhatsApp number (digits only with country code), monitored email, confirmed hours, exact address and a real map destination.
4. Replace demo review text with genuine authorized feedback. Or set `demoMode.showSampleReviews` to `false` to hide the review section.
5. Once all placeholders are replaced, set `demoMode.enabled` to `false`, hide the concept banner and decide whether to keep `demoMode.showVayoraCredit` enabled.
6. Set `agency.url` only after confirming the official Vayora URL. It is intentionally blank by default.

Full instructions: [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md).

## Photography and network note

Images reference individual pages on Pexels and are **not bundled as local files**. This environment could not resolve/download external image files, so local WebP/AVIF optimization and image-response verification could not be completed here. The page marks below-the-fold imagery as lazy, gives the hero priority, includes useful alt text and has fallback colors. See [`docs/ASSET_CREDITS.md`](docs/ASSET_CREDITS.md). Before launch, confirm every current photo source and license, then consider saving compressed responsive copies locally where permitted.

Google Fonts and the GSAP 3.13.0 / ScrollTrigger scripts are loaded from public CDNs. If either CDN is unavailable, the content remains in the page; animation enhancement is skipped. The project does not claim a locally bundled GSAP build.

## Important limitations

- No server-side contact submission, confirmed table availability, online ordering, payment, customer tracking or reservation engine is implemented.
- The map is clearly labelled illustrative; no fake map destination is linked. Configure `contact.mapsUrl` with the verified business location before enabling directions.
- The address, hours and prices are sample placeholders. Sample reviews are explicitly labelled as fictional.
- The Scroll World resource was evaluated; its documented paid rendering chain is not included. The scroll-story is a lightweight CSS-sticky and GSAP crossfade alternative, not a seamless 3D video flight.
- This repository is a static template, not a finished launch for an actual café. Validate all media, licensing, copy, contact details, contrast and responsive behavior for the client and deployment environment.

## Project map

```text
index.html                Main café website
journal.html              Data-driven sample article page
src/config.js             Central client configuration
src/main.js               Rendering, interactions and GSAP enhancement
src/article.js            Journal page renderer
src/styles.css            Main design system and responsive styles
src/journal.css           Article styling
assets/favicon.svg        Local favicon
scripts/server.mjs        Small local preview server
scripts/check.mjs         Syntax, anchor, asset and configuration checks
docs/CUSTOMIZATION.md     Rebranding guide
docs/ANIMATION_GUIDE.md   Motion system and fallbacks
docs/ASSET_CREDITS.md     Pexels photo sources and credit notes
docs/DESIGN_AND_SKILL_AUDIT.md  Resource-by-resource implementation audit
docs/TEST_REPORT.md       Test commands and limits
```

## Licence and third-party materials

The site-specific source code is provided for adaptation with Vayora projects; see `LICENSE`. Third-party photography, fonts and GSAP remain subject to their own terms. Their use is not transferred by this project's code licence.
