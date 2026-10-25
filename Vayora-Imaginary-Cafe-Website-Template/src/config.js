/*
 * DAYBOOK CAFÉ — CENTRAL DEMO CONFIGURATION
 * Replace fictional sample data here before presenting a production-ready version.
 * No real email/phone/map destination is configured by default.
 */
window.CAFE_CONFIG = {
  brand: {
    name: "Daybook",
    fullName: "Daybook Café",
    tagline: "Make a little room for slow.",
    logoPath: "", // Optional image file; blank keeps the drawn cup mark.

    city: "Dehradun",
    region: "Uttarakhand",
    colors: { paper: "#f4f0e6", ink: "#272c22", green: "#294637", olive: "#9fa17a", clay: "#ba7753", yellow: "#e2c780" },
    fonts: { display: "Playfair Display", body: "DM Sans" }
  },
  contact: {
    addressLines: ["Your café address goes here", "Dehradun, Uttarakhand"],
    phone: "",            // Example: +919876543210 — leave blank to hide call actions.
    whatsapp: "",         // Digits only, including country code. Never put a + here.
    email: "hello@daybook.example", // Replace with a monitored inbox before launch.
    mapsUrl: "",           // Add the verified Google Maps destination, not a guessed address.
    instagram: "",         // Example: https://instagram.com/yourhandle
    hours: [
      { days: "Monday–Sunday", time: "8:00 AM–8:00 PM" }
    ],
    directionsLabel: "Directions after location setup"
  },
  demoMode: {
    enabled: true,
    showBanner: true,
    showSampleReviews: true,
    showSeasonalFeature: true,
    showVayoraCredit: true
  },
  agency: { name: "Vayora", url: "" },
  announcement: { enabled: true, text: "The first good thing of the day is usually coffee." },
  ctaLabels: { heroPrimary: "Explore the menu", heroSecondary: "Find your way here", navPrimary: "Come on in", signaturePrimary: "See what else is brewing", inquirySubmit: "Prepare my message", journalPrimary: "Read the journal" },
  hero: {
    locationLabel: "A neighbourhood coffee room · Dehradun",
    hoursLabel: "Made for mornings, open all day",
    headlineBefore: "Make a little",
    headlineEmphasis: "room for slow.",
    supportingText: "Good coffee, warm bread, and the sort of morning that doesn’t ask you to hurry."
  },
  about: {
    headingBefore: "Somewhere between",
    headingEmphasis: "first sip",
    headingAfter: "and last light.",
    paragraphOne: "Daybook began with a simple thought: not every hour needs to be productive. Some can just be yours. Come in for a flat white, stay because the light is lovely, leave whenever you feel like it.",
    paragraphTwo: "A neighbourhood table, a small-batch coffee bar, something warm from the oven. Nothing complicated. Everything considered."
  },
  signature: {
    name: "The Soft Landing",
    headingBefore: "The",
    headingEmphasis: "soft",
    headingAfter: "landing.",
    category: "Signature coffee",
    description: "A double shot, silky oat milk, a little maple, and a pinch of cinnamon. For the mornings that need a gentler start.",
    price: 240,
    image: "https://images.pexels.com/photos/29253460/pexels-photo-29253460.jpeg?auto=compress&cs=tinysrgb&w=1300"
  },
  menuCategories: ["All", "Coffee", "Not coffee", "Bakery", "Brunch"],
  menuItems: [
    { id: "soft-landing", name: "The Soft Landing", category: "Coffee", note: "Oat milk · maple · cinnamon", description: "A little sweetness, a lot of comfort.", price: 240, image: "https://images.pexels.com/photos/29253460/pexels-photo-29253460.jpeg?auto=compress&cs=tinysrgb&w=700", featured: true, available: true, tags: ["House favourite"] },
    { id: "flat-white", name: "Neighbourhood Flat White", category: "Coffee", note: "Double espresso · silky milk", description: "A familiar favourite, done with care.", price: 190, image: "https://images.pexels.com/photos/36964583/pexels-photo-36964583.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: [] },
    { id: "long-black", name: "Long Way Around", category: "Coffee", note: "Espresso · hot water", description: "Clear, bold, and made to be savoured.", price: 160, image: "https://images.pexels.com/photos/19335372/pexels-photo-19335372.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: [] },
    { id: "cold-brew", name: "Slow Cold Brew", category: "Coffee", note: "Cold steep · orange peel", description: "A patient brew for brighter afternoons.", price: 210, image: "https://images.pexels.com/photos/36447675/pexels-photo-36447675.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: ["Iced"] },
    { id: "cocoa", name: "Little Dark Cocoa", category: "Not coffee", note: "Cocoa · steamed milk", description: "Deep chocolate, soft edges, no hurry.", price: 180, image: "https://images.pexels.com/photos/10545074/pexels-photo-10545074.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: [] },
    { id: "matcha", name: "Green Hour Matcha", category: "Not coffee", note: "Matcha · milk of choice", description: "A grassy, mellow pause in a cup.", price: 230, image: "https://images.pexels.com/photos/35852545/pexels-photo-35852545.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: [] },
    { id: "bun", name: "Cardamom Morning Bun", category: "Bakery", note: "Brown butter · cardamom sugar", description: "Flaky edges, soft middle, best while warm.", price: 180, image: "https://images.pexels.com/photos/35508419/pexels-photo-35508419.jpeg?auto=compress&cs=tinysrgb&w=700", featured: true, available: true, tags: ["Seasonal"] },
    { id: "croissant", name: "Butter Croissant", category: "Bakery", note: "Laminated pastry · cultured butter", description: "Golden layers and a very good crumb.", price: 150, image: "https://images.pexels.com/photos/461313/pexels-photo-461313.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: [] },
    { id: "eggs-toast", name: "The Window Seat Plate", category: "Brunch", note: "Eggs · sourdough · greens", description: "A simple plate for a slower morning.", price: 320, image: "https://images.pexels.com/photos/10720381/pexels-photo-10720381.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: true, tags: ["Brunch"] },
    { id: "toast", name: "Jam on Toast", category: "Brunch", note: "Sourdough · seasonal jam", description: "A small, lovely thing with your second cup.", price: 190, image: "https://images.pexels.com/photos/10720381/pexels-photo-10720381.jpeg?auto=compress&cs=tinysrgb&w=700", featured: false, available: false, tags: [] }
  ],
  gallery: [
    { src: "https://images.pexels.com/photos/3951751/pexels-photo-3951751.jpeg?auto=compress&cs=tinysrgb&w=1500", alt: "Sunlit café interior with a coffee counter", caption: "The morning room" },
    { src: "https://images.pexels.com/photos/8956156/pexels-photo-8956156.jpeg?auto=compress&cs=tinysrgb&w=1300", alt: "A quiet window table in a café", caption: "A seat by the window" },
    { src: "https://images.pexels.com/photos/36470573/pexels-photo-36470573.jpeg?auto=compress&cs=tinysrgb&w=1300", alt: "Vintage café counter with coffee equipment", caption: "Behind the counter" },
    { src: "https://images.pexels.com/photos/5461645/pexels-photo-5461645.jpeg?auto=compress&cs=tinysrgb&w=1300", alt: "Coffee brewing tools and a considered coffee bar", caption: "Tools of the trade" },
    { src: "https://images.pexels.com/photos/7332846/pexels-photo-7332846.jpeg?auto=compress&cs=tinysrgb&w=1300", alt: "Croissant served with a cup of coffee", caption: "Something from the oven" }
  ],
  seasonal: {
    enabled: true,
    name: "Cardamom Morning Bun",
    price: 180,
    headline: "The kind of treat you save the last bite for.",
    headingBefore: "The kind of",
    headingEmphasis: "treat you save",
    headingAfter: "the last bite for.",
    description: "A brown-butter cardamom bun with a soft centre and crisp edges. Best with your coffee, preferably unhurried.",
    image: "https://images.pexels.com/photos/35508419/pexels-photo-35508419.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  reviews: [
    { quote: "The kind of place where one coffee quietly turns into two.", author: "A sample guest", detail: "Illustrative quote · not a real review" },
    { quote: "Good light, really lovely coffee, and no reason to check the time.", author: "A sample regular", detail: "Illustrative quote · not a real review" }
  ],
  articles: [
    { id: "coffee-notes", category: "COFFEE NOTES", title: "A tiny guide to choosing your usual", excerpt: "Espresso, flat white, long black — here's how to find the cup that fits your day.", readTime: "4 MIN READ", image: "https://images.pexels.com/photos/36964583/pexels-photo-36964583.jpeg?auto=compress&cs=tinysrgb&w=900", body: ["There is no one right way to order coffee. Some mornings want something short and intense; others want a longer cup you can carry to a window seat.", "An espresso is concentrated and direct. A flat white is balanced, with a smooth layer of textured milk. A long black keeps its clarity while making space for a slower drink. Cold brew, steeped over time, can feel rounded and mellow.", "Start with what you enjoy, then try one small variation. The perfect order is the one you look forward to." ] },
    { id: "coffee-and-bread", category: "FROM THE OVEN", title: "Why coffee and something warm just work", excerpt: "A little sweetness, a crisp edge, and a cup that brings it all together.", readTime: "3 MIN READ", image: "https://images.pexels.com/photos/461313/pexels-photo-461313.jpeg?auto=compress&cs=tinysrgb&w=900", body: ["A fresh pastry changes the pace of a coffee break. Texture matters: crisp layers beside a velvety drink, a little salt beside chocolate, or a gently spiced bun alongside a bright coffee.", "For a simple pairing, try a buttery croissant with a flat white, or a cinnamon pastry with a long black. These are starting points, not strict rules.", "Order what sounds good, break off the first bite, and give yourself a minute before reaching for your phone again." ] },
    { id: "window-seat", category: "SLOW LIVING", title: "The underrated art of the window seat", excerpt: "A different view can be all the change of scene you need.", readTime: "2 MIN READ", image: "https://images.pexels.com/photos/8956156/pexels-photo-8956156.jpeg?auto=compress&cs=tinysrgb&w=900", body: ["A window seat gives a coffee break a little perspective. Light shifts, people pass, and the room moves around you while you get to stay still for a moment.", "Bring a book, meet a friend, or leave your plans open. The point isn't to do more with the hour. It is to notice the hour you already have.", "At Daybook, the best seat is whichever one lets you breathe a little easier." ] }
  ],
  socialLinks: [
    { label: "Instagram", url: "", handle: "Instagram to be configured" },
    { label: "Maps", url: "", handle: "Map destination to be configured" }
  ],
  assetPolicy: "Photos are served from Pexels URLs and credited in docs/ASSET_CREDITS.md. Before production, confirm each asset is still available and consider downloading optimized copies if permitted by current licensing terms."
};
