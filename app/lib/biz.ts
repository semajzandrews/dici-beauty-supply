// Verified in recon (Google Places, 06-15-2026). No existing website.
export const BIZ = {
  name: "Dici Beauty Supply",
  street: "247 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  phoneDisplay: "(973) 677-3331",
  phoneHref: "tel:+19736773331",
  rating: 5.0,
  reviews: 3,
  mapsQuery: "Dici+Beauty+Supply+247+Main+St+City+of+Orange+NJ+07050",
} as const;

export const HOURS: { day: string; open: string; close: string }[] = [
  { day: "Monday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Tuesday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Wednesday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Thursday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Friday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Saturday", open: "9:30 AM", close: "7:00 PM" },
  { day: "Sunday", open: "11:00 AM", close: "5:00 PM" },
];

// Each image is used exactly once across the whole site (BUILD_RULES §6).
const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroFlatlay: px(4620843, 1400), // artisanal makeup flatlay on dark wood (signature)
  cosmetics: px(7256120, 1200), // full cosmetics flatlay, warm tan
  skincareToner: px(6621462, 1100), // amber apothecary serum/dropper bottles on white
  skincareJars: px(3785147, 1100), // skincare jars on fur, warm gold
  tools: px(3737599, 1100), // jade roller + botanical
  counter: px(1115128, 1200), // brushes + palettes counter
  lip: px(2587370, 800), // lip gloss product
  blush: px(2533266, 800), // blush compact + lipstick
  care: px(3762875, 1100), // cream on hand, warm tan
} as const;
