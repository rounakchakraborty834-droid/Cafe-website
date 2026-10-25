# Animation Guide

## Runtime approach

The visual enhancement layer uses GSAP 3.13.0 and ScrollTrigger from the jsDelivr CDN. This static build deliberately does not claim the GSAP package is bundled locally. When the scripts load, `src/main.js` registers ScrollTrigger and marks the root document with `data-motion="gsap-scrolltrigger"`. If the CDN is unavailable or the user requests reduced motion, content remains usable and the script does not initialize the motion timelines.

## Motion map

| Area | Motion | Trigger / control |
|---|---|---|
| Hero | Staggered headline, support copy, CTA and image scale-in | On page entry; short timeline, no wait gate |
| Story and editorial headings | Upward reveal | One-time ScrollTrigger near viewport entry |
| Photo-led sections | Clip/mask and image scale settling | One-time section entry |
| Hero, story and selected images | Gentle vertical depth/parallax | ScrollTrigger scrub across the image viewport |
| Signature coffee | Image crop reveal and secondary detail layer | ScrollTrigger section entry |
| Menu | Category filters rebuild the relevant results with a short entrance; cards have independent hover depth | Click-driven, no page reload |
| Signature scroll story | Three photo scenes fade and scale as scroll progress advances | ScrollTrigger maps the journey progress into scene transitions on wider screens |
| Visit and inquiry | Supporting visual/form reveal | ScrollTrigger once near viewport entry |
| Navigation, buttons and gallery | Hover/focus states; mobile menu transitions; gallery lightbox supports previous/next, Escape, arrow keys and touch swipe | Immediate input feedback |
| Back to top | Visibility/position transition after scrolling | Passive scroll listener |

## Signature journey and Scroll World evaluation

The signature interaction uses a sticky composition and three photographic scenes: the sunlit room, coffee preparation, and pastry/coffee. On wider screens, ScrollTrigger scrubs through the fades as the visitor scrolls through the section. On smaller screens, the stage becomes a static, touch-friendly story with three scene-selection controls. This is a lightweight visual sequence, **not** a seamless 3D camera flight or generated video chain.

Scroll World was evaluated as requested. Its README documents a multi-tool video-rendering pipeline and paid credits/services. No paid rendering was started and no credentials were available. The permitted fallback is implemented with existing imagery, CSS sticky positioning and GSAP/ScrollTrigger.

## Accessibility and performance rules

- `prefers-reduced-motion: reduce` disables the scripted motion and turns off smooth scrolling/ticker motion via CSS.
- The page content is rendered in HTML independently from the animation system; no text is hidden waiting for GSAP.
- No audio autoplay, WebGL canvas or continuously rendering 3D scene is used.
- The hero image is marked `fetchpriority="high"`; below-the-fold media uses lazy loading.
- The mobile journey uses explicit buttons instead of forcing pinned-scroll choreography on touch devices.
- Every navigation and gallery control is a real link or button with an accessible label; the lightbox supports Escape, arrow keys and a basic focus loop.
- GSAP animations mainly use transforms and opacity, with image `clip-path` for selected crop transitions. Parallax amounts are deliberately small.

## Tuning guidance

Keep the hero reveal under roughly two seconds, avoid adding more pinned sections, and test the journey at narrow widths after any image/section changes. Add new ScrollTriggers only when a distinct moment benefits from them. If content order, section height or image dimensions change, verify the trigger start/end points and refresh behavior in the actual deployed browser.
