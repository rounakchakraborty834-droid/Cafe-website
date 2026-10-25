# Design and Skill Audit

**Project:** Daybook Café — Vayora concept template  
**Review date:** 25 October 2026  
**Architecture selected:** plain HTML, CSS and browser JavaScript, with GSAP/ScrollTrigger as progressive CDN enhancements  
**Reason:** no existing website project was attached, so the implementation starts from a clean standalone static site rather than introducing a framework solely to satisfy the brief.

## Resource-by-resource review

| Requested resource | What was reviewed | How it informed the implementation | Installation/use status |
|---|---|---|---|
| [Scroll Craft](https://github.com/nateherkai/scroll-craft) | Repository README and its premium scroll-driven design/verification workflow | Distinct hero, varied editorial sections, one signature story rather than repeated card grids, separate mobile journey controls, content-first fallback | Principles applied. Repository/skill folder was not cloned into the project because the execution shell could not resolve external hosts; no local skill installation is claimed. |
| [GSAP Skills](https://github.com/greensock/gsap-skills) | Official README and recommended use of GSAP/ScrollTrigger patterns | The actual page uses a staggered hero timeline, scroll-triggered heading/image reveals, restrained parallax, section-specific reveals, and scrubbed scene crossfades | The web runtime references GSAP 3.13.0 and ScrollTrigger from jsDelivr. The agent skill was not installed through `npx skills add`; shell-side network retrieval failed. The project does not claim a bundled GSAP package. |
| [WebGL Animation Skills](https://github.com/iart-ai/webgl-animation-skills) | README and skills overview (GLSL, Three.js animation, particle systems, GPU cleanup) | No WebGL scene was added: it would add GPU work without materially improving this photo-led café story; photo composition and GSAP deliver the intended effect at lower cost | Reviewed; deliberately not implemented. This is a scoped design choice, not a compatibility failure. |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Repository overview and component/accessibility positioning | Semantic buttons and links, visible keyboard focus, explicit aria states, reduced-motion handling, proper form labels, and a keyboard/touch lightbox were implemented in plain HTML | Not installed because the site uses plain HTML/CSS/JS, per the brief's instruction not to migrate solely for the component library. No shadcn component is claimed as bundled. |
| [Anthropic Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Frontend Design skill documentation through an indexed mirror of the source instructions | Original café-specific layout, expressive but legible typography, controlled palette, asymmetry, and intentional section variation informed the design | Guidance reviewed and applied. The skill was not installed as a local agent package. |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Repository README and skill guide, including responsiveness and pre-delivery checks | Touch targets, consistent spacing, responsive type/layout, accessible interaction states, reduced-motion behavior, and a manual QA checklist | Guidance reviewed and applied. The automated skill itself was not installed; the project does not claim that its CLI ran or generated a score. |
| [Ponytail](https://github.com/DietrichGebert/ponytail) | README and installation guide | The static architecture avoids a heavy framework, fake backend, unnecessary UI library, unused dependencies and dead interaction code | Not installed as an agent plugin: the available workspace is not a running Codex/Claude plugin host and did not have source-network access for the documented installation. Its source is an agent instruction set, not a browser runtime library. The project does not claim the plugin/hooks ran. |
| [Scroll World](https://github.com/oso95/scroll-world) | README, documented pipeline, dependencies, rendering/services and paid-credit notes | Evaluated the multi-scene camera-flight idea. Implemented the brief's permitted alternative: sticky visual stage plus three crossfading Pexels scenes driven by ScrollTrigger on desktop, with direct controls on mobile | Paid scene rendering was not initiated; no Monid/Higgsfield credentials or credits were supplied. This is not a generated continuous 3D flight. |
| [Apple Design Skill](https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md) | Skill documentation covering interaction feedback, motion continuity, optical typography, spacing and reduced motion | Quick/interruptible button and menu feedback, image lightbox with keyboard/touch controls, stable design tokens, and a `prefers-reduced-motion` fallback | Guidance reviewed and applied. It was not installed as a separate runtime package. |

## Design-system decisions

- **Brand:** Daybook Café, a fictional neighbourhood coffee room. Tagline: “Make a little room for slow.”
- **Palette:** warm paper, dark green, ink, muted olive, clay and butter yellow. Values are centralized in `src/config.js`.
- **Typography:** Playfair Display for expressive editorial headings and DM Sans for utility/body copy. Font links are remote and have system fallbacks.
- **Layout:** asymmetrical split hero, editorial story image, dark signature feature, category menu, pinned scroll story, mixed gallery, typographic visit/inquiry sections and an unusually compact mobile composition.
- **Business truthfulness:** the demo indicator labels the café, sample menu/review content, price samples and location as fictional; map artwork is clearly an illustration, not a live destination. No backend booking, payment or order claims are made.

## Known implementation limits

1. Photography is referenced by remote Pexels URLs. The shell could not resolve/download external image files, so local AVIF/WebP conversion and actual network status checks could not be completed. See `ASSET_CREDITS.md`.
2. GSAP and ScrollTrigger are loaded from a public CDN rather than included locally. The page content, category filtering and basic controls do not depend on those scripts.
3. Browser automation and responsive screenshot review were attempted only within the local browser environment available; external images/CDN assets could not be verified from this isolated network. See `TEST_REPORT.md` for exact results.
4. No WebGL runtime, Scroll World rendered video, paid rendering workflow, or synthetic photography was added.

## Skill-installation honesty

The resource documentation was inspected and implementation principles were applied where suitable. The repository skills themselves were not cloned or installed into agent-specific directories because external-source access from the shell was unavailable and no corresponding plugin installation host was active. This report distinguishes reviewed guidance from installed software; it does not claim a successful skills CLI install.
