# Rebranding and Client Handover Guide

The project is intended to be customized from `src/config.js` first. Do not hunt through every section to change common business details.

## 1. Brand identity

Edit the `brand` object:

- `name`, `fullName`, `tagline`, `city`, `region`.
- `colors`: `paper`, `ink`, `green`, `olive`, `clay`, `yellow`. Hex values are applied to CSS custom properties.
- `fonts.display` and `fonts.body`: family names are applied to CSS custom properties. The starter loads Playfair Display and DM Sans from Google Fonts. To use different hosted fonts, update the font link in `index.html` and `journal.html` too; the CSS fallbacks remain active if the provider is unavailable.
- `logoPath`: leave as an empty string to keep the drawn cup mark. Set it to a local logo file such as `assets/client-logo.svg` to replace the mark in the wordmark. Replace `assets/favicon.svg` separately for the browser icon.

## 2. Hero, story and calls to action

- `hero.locationLabel`, `hero.hoursLabel`, `hero.headlineBefore`, `hero.headlineEmphasis`, and `hero.supportingText` control the first viewport. Keep the headline concise so it wraps well on mobile.
- `about.headingBefore`, `about.headingEmphasis`, `about.headingAfter`, and the two paragraphs control the story section.
- `signature` controls the signature drink heading, description, price and image.
- `ctaLabels` controls the primary hero actions, navigation CTA, signature CTA, inquiry button and journal CTA. The arrow icon is kept as a separate element.
- `announcement.enabled` hides/shows the top announcement; `announcement.text` controls its message.

## 3. Menu, seasonal feature and gallery

- Add/update entries in `menuItems`; each item has an `id`, `name`, `category`, `note`, `description`, `price`, `image`, `available` and optional `tags`.
- `menuCategories` supplies the category-filter buttons. Each item's `category` must match one of these labels, except `All`, which is the all-items view.
- Set `available: false` to show a clear unavailable label. This is only display state; there is no stock or ordering integration.
- `seasonal` controls the single seasonal feature, including visibility, heading, text, price and image. Set `enabled: false` to remove it. `demoMode.showSeasonalFeature` can hide the demo-only seasonal feature as well.
- `gallery` contains image URLs, meaningful alt text and captions. The image lightbox derives its slide order from this array.
- Replace remote photo URLs with validated, optimized local assets before production where licensing permits.

## 4. Journal and reviews

- `articles` supplies the journal preview cards and article bodies. Each `id` becomes the query in `journal.html?article=ID`; keep ids unique and URL-friendly. The detail page is implemented, not a dead card link.
- `reviews` currently contains labelled sample copy. Do not present the samples as genuine customer endorsements. Replace each quote with approved real feedback before enabling it for a live café. Set `demoMode.showSampleReviews: false` to hide the section in a demo, and remove/replace sample wording when migrating to verified review data.

## 5. Contact details and location safety

Edit `contact` only with verified information:

- `addressLines`: the real address, split into lines.
- `hours`: an array of `{ days, time }` entries.
- `phone`: a real dialable phone number, including country code where applicable. Leave blank to hide the call shortcut.
- `whatsapp`: digits only, including the country code. Example format: `919876543210`. The form builds a `wa.me` URL with `encodeURIComponent` and opens a prefilled draft; the visitor must choose whether to send it.
- `email`: a monitored inbox. The `.example` placeholder is intentionally nonfunctional and will not open a mail draft.
- `mapsUrl`: the verified map destination URL. Leave empty until confirmed; the map artwork itself is explicitly illustrative and never claims to be a live map.

The inquiry form does not send data to a server, reserve a table, or verify availability. Configure a real email or WhatsApp destination to enable messaging. Add a proper server-side form endpoint only if a client asks for one and the privacy/security requirements are understood.

## 6. Social profiles and Vayora credit

- Add real HTTPS links to `socialLinks`. Blank links are hidden rather than rendered as inactive buttons.
- Keep `agency.url` blank until the official Vayora website URL has been confirmed. When configured, the credit text becomes a link.
- `demoMode.showVayoraCredit` controls whether the discreet footer credit is visible.

## 7. Demo mode and launch checklist

Before sending a preview, keep `demoMode.enabled: true` so the concept banner and sample-data notice remain visible. Before real launch:

1. Replace all sample address, hours, prices, copy, imagery and menu data.
2. Remove or replace fictional reviews with approved, genuine review text.
3. Configure verified phone, WhatsApp, email, map and social links.
4. Set a confirmed `agency.url`; respect the agreed credit/attribution terms.
5. Review photo permissions and replace the Pexels references with local optimized copies where permitted.
6. Set `demoMode.enabled: false` and choose visibility flags intentionally.
7. Test from clean desktop and mobile browsers, with reduced motion enabled, keyboard only, slow network, and image/CDN failures.
8. Run `npm test`, then test the deployment host and any server-backed form integration separately.
