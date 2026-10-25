# Daybook Café Premium Café Website Concept

<p align="center">
  <strong>A refined digital experience for modern café culture.</strong>
  <br />
  Designed and developed as a reusable website concept by <strong>Vayora</strong>.
  <br /><br />
  <a href="https://daybook-cafe.netlify.app/">
    <strong>☕ View Live Website →</strong>
  </a>
</p>

---

## Overview

**Daybook Café** is a fictional café brand brought to life through an editorial, visually immersive website. Combining warm aesthetics, expressive typography, carefully choreographed animations, and practical interactions, the project demonstrates how a café's digital presence can become an extension of its atmosphere and identity.

Created by **Vayora**, this concept serves as a reusable live demo for café website redesigns, allowing the brand identity, menu, imagery, business information, and contact details to be adapted for different clients.

**Live Demo:** https://daybook-cafe.netlify.app/

## Features

- **Editorial Art Direction** — Warm tones, expressive typography, considered spacing, and café-inspired visual storytelling.
- **Responsive Design** — Adaptable layouts and navigation for mobile, tablet, and desktop.
- **Scroll-Driven Animations** — GSAP and ScrollTrigger enhancements, heading reveals, image transitions, and subtle parallax effects.
- **Interactive Menu** — Filter menu items by category without reloading the page.
- **Signature Item Showcase** — A dedicated feature for highlighting the café's speciality drinks and food.
- **Interactive Gallery** — Image viewing with a lightbox experience.
- **Café Journal** — Dedicated article pages for editorial content.
- **Contact Shortcuts** — Configurable phone, email, directions, and WhatsApp inquiry links where details are provided.
- **Inquiry Experience** — Collect visit preferences and prepare contextual inquiries without pretending to submit them to a backend.
- **Accessibility Foundations** — Semantic HTML, keyboard interactions, visible focus states, and reduced-motion support.
- **Reusable Configuration** — Centralized café information for faster customization.
- **Vayora Attribution** — A subtle, configurable credit for the studio behind the concept.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure |
| CSS3 | Styling, layouts, and responsive design |
| JavaScript | Interactive functionality |
| GSAP | Motion and animation timelines |
| ScrollTrigger | Scroll-based animation experiences |
| Node.js | Local preview server and project checks |
| Netlify | Live website deployment |

## Design Philosophy

Daybook Café is designed around three principles:

**Atmosphere first.** Photography, typography, and composition work together to communicate a distinctive café identity.

**Motion with purpose.** Animations guide attention and add depth without replacing content or interrupting normal scrolling.

**Built for adaptation.** The concept is structured to make client-specific branding changes straightforward and maintainable.

## Project Structure

```text
.
├── index.html
├── journal.html
├── src/
│   ├── config.js
│   ├── main.js
│   ├── article.js
│   ├── styles.css
│   └── journal.css
├── assets/
│   └── favicon.svg
├── scripts/
│   ├── server.mjs
│   └── check.mjs
├── docs/
│   ├── CUSTOMIZATION.md
│   ├── ANIMATION_GUIDE.md
│   ├── ASSET_CREDITS.md
│   ├── DESIGN_AND_SKILL_AUDIT.md
│   └── TEST_REPORT.md
└── README.md
```

## Run Locally

### Prerequisites

- Node.js 18 or newer
- A modern web browser

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <your-project-folder>
```

Start the local preview server:

```bash
npm start
```

Open the website:

```text
http://127.0.0.1:4173
```

Run the project checks:

```bash
npm test
```

## Customization

Daybook Café is intended to be more than a static showcase. Its centralized configuration makes it easier to adapt the concept to a real café.

Start with `src/config.js` to update the available business settings.

| Element | Customization |
| --- | --- |
| Brand identity | Café name, tagline, colors, and typography |
| Menu | Categories, names, descriptions, and prices |
| Featured content | Signature items and seasonal highlights |
| Photography | Image sources and visual assets |
| Business details | Address, city, telephone, and opening hours |
| Contact methods | Email, WhatsApp, and social links |
| Journal | Article titles and editorial content |
| Demo mode | Visibility of sample content and demo indicators |
| Agency credit | Vayora attribution and configured URL |

Refer to `docs/CUSTOMIZATION.md` for the detailed guide.

## Animation and Performance

The website uses GSAP and ScrollTrigger to create a more engaging browsing experience through scroll-triggered reveals, image movement, and section transitions.

The implementation aims to keep animation purposeful and responsive while respecting reduced-motion preferences.

Some visual resources, including remote photography, fonts, and animation libraries, require an internet connection. Photography is referenced remotely rather than bundled as optimized local image files.

## Important Notes

> **This is a fictional concept website.**

Daybook Café is not presented as a real operating business. Menu items, prices, location details, sample reviews, opening hours, and other business information are illustrative placeholders.

Before adapting the project for a real client:

- Replace fictional content with verified business information.
- Use photography approved for the intended commercial use.
- Configure and test real contact and directions links.
- Replace sample reviews with genuine, authorized feedback.
- Test responsive layouts and animations in the target browsers.

The inquiry experience does not provide backend form processing, live table availability, online ordering, or payment functionality.

The scroll-driven visual experience is a lightweight animation sequence, not a seamless rendered 3D video journey.

## Documentation

Additional project documentation is available in the `docs/` directory:

- `CUSTOMIZATION.md` — Rebranding and configuration guide
- `ANIMATION_GUIDE.md` — Motion system and animation implementation
- `ASSET_CREDITS.md` — Photography and third-party resource notes
- `DESIGN_AND_SKILL_AUDIT.md` — Design research and implementation audit
- `TEST_REPORT.md` — Project checks and verification notes

## Credits

**Concept, design direction, and development: Vayora**

Daybook Café was created to demonstrate how thoughtful design, purposeful motion, and practical functionality can work together to create a more distinctive online experience for an independent café.

---

<p align="center">
  <strong>Vayora</strong>
  <br />
  Building distinctive digital experiences for ambitious brands.
  <br /><br />
  <a href="https://daybook-cafe.netlify.app/">Explore the Live Demo</a>
</p>
