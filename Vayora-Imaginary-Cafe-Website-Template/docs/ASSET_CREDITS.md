# Photography and Asset Credits

## Photography sourcing policy

The site uses genuine photographic URLs from Pexels. No AI-generated photography or video was used. The individual Pexels pages below are the source/credit references. Pexels pages inspected for this build displayed a free-to-use license; the general license is at [pexels.com/license](https://www.pexels.com/license/). Confirm each asset and the applicable license again before using it on a paid client's live website.

**Important delivery note:** these files are not bundled locally. Each image is requested from `images.pexels.com` at a responsive query width. External downloads failed from the build shell because of DNS/network restrictions; therefore image download, local optimization and URL-response verification could not be completed in this environment. The current site uses the remote assets listed below. Consider saving optimized local copies where permitted before production.

| Pexels photo ID | Credit / source page | Current use |
|---|---|---|
| 3951751 | Ksenia Chernaya — [Interior of well lit stylish coffee house](https://www.pexels.com/photo/interior-of-well-lit-stylish-coffee-house-3951751/) | Hero and signature scroll scene 1 |
| 8956156 | Irina Bekhtereva — [Table in a Vintage Cafe Next to a Window](https://www.pexels.com/photo/table-in-a-vintage-cafe-next-to-a-window-with-a-wooden-frame-8956156/) | Story image, gallery, journal cover |
| 29253460 | Matheus Bertelli — [Artistic Latte in a Glass Cup on a Cafe Counter](https://www.pexels.com/photo/artistic-latte-in-a-glass-cup-on-a-cafe-counter-29253460/) | Signature drink and first menu item |
| 36964583 | Zulfugar Karimov — [Top View of Cappuccino with Latte Art and Spoon](https://www.pexels.com/photo/top-view-of-cappuccino-with-latte-art-and-spoon-36964583/) | Coffee menu item, signature detail and journal preview |
| 19335372 | Roza Khachatryan — [Cup of Coffee](https://www.pexels.com/photo/cup-of-coffee-19335372/) | Long black menu concept |
| 36447675 | Kari Alfonso — [Glass of Iced Coffee on Cafe Counter](https://www.pexels.com/photo/glass-of-iced-coffee-on-cafe-counter-36447675/) | Cold brew menu concept |
| 10545074 | Sena — [Photograph of a Hot Chocolate Drink in a Cup](https://www.pexels.com/photo/photograph-of-a-hot-chocolate-drink-in-a-cup-10545074/) | Non-coffee drink menu concept |
| 35852545 | QUI NGUYEN — [Layered Iced Matcha Latte on White Surface](https://www.pexels.com/photo/layered-iced-matcha-latte-on-white-surface-35852545/) | Matcha menu concept |
| 35508419 | Esra Nur Kalay — [Delicious Coffee and Pastry Breakfast on Marble Table](https://www.pexels.com/photo/delicious-coffee-and-pastry-breakfast-on-marble-table-35508419/) | Seasonal pastry feature and menu |
| 461313 | Pixabay — [Croissant](https://www.pexels.com/photo/croissant-461313/) | Bakery menu |
| 10720381 | Anastasia Ilina-Makarova — [Close-up of Breakfast on Restaurant Table](https://www.pexels.com/photo/close-up-of-breakfast-on-restaurant-table-10720381/) | Brunch menu item |
| 36470573 | Manish Jangid — [Charming Cafe Interior with Coffee Bar](https://www.pexels.com/photo/charming-cafe-interior-with-coffee-bar-36470573/) | Gallery scene |
| 5461645 | Amelia Hallsworth — [Interior Design of Coffee Shop](https://www.pexels.com/photo/interior-design-of-coffee-shop-5461645/) | Gallery scene |
| 7332846 | Evgeniy Alekseyev — [A Close-Up Shot of a Croissant and a Cup of Coffee](https://www.pexels.com/photo/a-close-up-shot-of-a-croissant-and-a-cup-of-coffee-7332846/) | Gallery and scroll scene 3 |
| 34337586 | Anhelina Vasylyk — [Barista Making Coffee with Espresso Machine](https://www.pexels.com/photo/barista-making-coffee-with-espresso-machine-34337586/) | Scroll scene 2 |
| 34337604 | Anhelina Vasylyk — [Barista Making Coffee with Espresso Machine](https://www.pexels.com/photo/barista-making-coffee-with-espresso-machine-34337604/) | Craft section |

## Delivery-ready asset recommendations

- Validate that each source URL still resolves and the photo still fits the surrounding crop. Pexels assets can be replaced or removed by contributors.
- Download responsive sizes appropriate to each crop rather than shipping original 4K/6K photos everywhere.
- Prefer AVIF/WebP with JPEG fallback where supported, `srcset`/`sizes`, and a suitable image CDN or static asset path.
- Keep the hero's top priority/fetch priority and lazy-load below-the-fold images.
- Preserve the photo creator/source page URL in this file if local copies are added.
- Do not imply that stock photography depicts the real client café. Replace with authorized venue photography before the site represents a real business.

## Non-photo assets

- `assets/favicon.svg`: locally authored vector mark, not a third-party icon font.
- Fonts: Google Fonts CSS for Playfair Display and DM Sans; use is subject to Google Fonts terms. CSS fallbacks are included.
- Motion: GSAP 3.13.0 and ScrollTrigger are loaded from jsDelivr CDN; this project does not include their source files. See [GSAP](https://gsap.com/) for license and distribution terms.
