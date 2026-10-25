# Test Report

**Run date:** 25 October 2026. This report separates executed checks from browser-level checks that could not complete in the isolated network environment.

## Executed successfully

### Package installation and project checks

- `npm ci --offline --ignore-scripts` — passed; lockfile is valid and there are no third-party npm dependencies.
- `npm test` — **45 passed, 0 failed, 1 warning**.
- JavaScript syntax validation passed for the main renderer, journal renderer, central configuration, static server and check script.
- Static checks passed for required files, duplicate IDs, same-page fragment links, local asset paths, central configuration keys, expected feature implementations, reduced-motion CSS and obvious secret patterns.
- The sole warning is expected: 20 image URL references point to Pexels and were not verified/downloaded because external DNS/network access was unavailable.

### Local HTTP server

The local preview server started on `127.0.0.1:4173`. The following routes returned HTTP 200 with the expected content types: `/`, `/journal.html`, `/src/config.js`, `/src/main.js`, `/src/styles.css`, and `/assets/favicon.svg`. A traversal-style probe for `/%2e%2e/etc/passwd` returned HTTP 404; no file content was exposed.

## Implemented interaction paths (source review, not browser-certified)

- Menu categories filter menu items without a reload; an empty result has an explanatory state.
- Gallery buttons open an accessible dialog; close, previous/next, Escape, arrow keys, focus restoration and touch swipes are wired in JavaScript.
- Mobile navigation uses a real button, `aria-expanded`, keyboard/touch support and Escape-to-close.
- Inquiry form performs browser validation, builds a contextual message and only opens a WhatsApp/email draft when a real destination is configured. It never reports server-side submission.
- Journal cards link to `journal.html?article=...`; the article page reads content from central config.
- Direction and social links are hidden until configured with a real URL.

These interactions were checked in source and by static assertions, but were not confirmed by an automated browser interaction suite.

## Visual/browser verification blocked

A headless Chromium screenshot attempt stalled in this execution environment and produced no usable screenshot, even after limiting remote host resolution. Therefore the eight target widths and multiple section scroll positions have **not** been visually signed off. This report does not claim cross-device visual verification or a clean browser console.

## Environment limits and launch checklist

- External DNS resolution failed from the shell when attempting to retrieve Pexels media. Direct image downloads and actual HTTP status checks could not be performed; photos are remote and not bundled locally.
- GSAP and ScrollTrigger are loaded from a public CDN rather than included locally. The reduced-motion and script-unavailable paths exist in source but need browser validation on target devices.
- No paid Scroll World rendering, WebGL scene, live map, server-side inquiry endpoint or live reservation capability was created.
- Before production: check image/CDN responses and crops, run a browser test suite at 360/390/430/768/1024/1280/1440/1920px, inspect the hero/menu/story/gallery/visit/form/footer and mobile menu, test keyboard and reduced motion, review the console and contrast, replace all fictional business details, and re-check licensing.

A passing static check is not proof of visual quality or production readiness.
