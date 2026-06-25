// ─────────────────────────────────────────────────────────────
//  Central business config — edit values here to update the site
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Ghafan Steel Works",
  legalName: "Ghafan Steel, Welding & Mechanical Repairing Workshop",
  tagline: "Precision Steel Fabrication & Welding in Dubai",
  description:
    "Ghafan Steel Works delivers structural steel fabrication, professional welding (MIG/TIG/Arc) and custom gates, railings & grills in Al Qusais, Dubai. Built strong, finished clean, delivered on time.",
  url: "https://ghafansteelworks.ae",

  // ── Contact — replace the placeholder number with the real one ──
  phoneDisplay: "+971 55 822 5995",
  phoneRaw: "+971558225995",
  whatsapp: "971558225995", // international format, no + or spaces
  email: "info@ghafansteelworks.ae",

  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  address: {
    street: "Halab Street, Al Qusais Industrial 1",
    area: "Deira",
    city: "Dubai",
    country: "United Arab Emirates",
    landmark: "Near Al Nahda Pond Park & Ministry of Labour",
    lat: 25.2881553,
    lng: 55.384813,
  },

  mapEmbed:
    "https://www.google.com/maps?q=25.2881553,55.384813&z=16&output=embed",
  mapLink: "https://maps.app.goo.gl/MrYzeKSYzL9MT2WJ6",

  social: {
    instagram: "",
    facebook: "",
  },
};

export const whatsappLink = (msg = "Hello Ghafan Steel Works, I'd like a quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    slug: "structural-steel-fabrication",
    title: "Structural Steel Fabrication",
    short: "Beams, frames, platforms and heavy structures cut, fit and welded to spec.",
    icon: "beam",
    points: [
      "I-beams, columns, trusses & portal frames",
      "Mezzanine floors, staircases & platforms",
      "Shop drawings to on-site installation",
      "Certified welds & load-rated builds",
    ],
  },
  {
    slug: "welding-services",
    title: "Welding — MIG / TIG / Arc",
    short: "Clean, strong welds across mild steel, stainless and aluminium.",
    icon: "spark",
    points: [
      "MIG, TIG & stick (arc) welding",
      "Stainless steel & aluminium specialists",
      "On-site & workshop welding",
      "Repairs, modifications & reinforcement",
    ],
  },
  {
    slug: "gates-railings-grills",
    title: "Gates, Railings & Grills",
    short: "Custom ornamental and security steel for homes, villas and buildings.",
    icon: "gate",
    points: [
      "Sliding & swing gates (manual / automated)",
      "Balcony, staircase & balustrade railings",
      "Window grills & security doors",
      "Powder-coated & rust-protected finishes",
    ],
  },
  {
    slug: "mechanical-repair",
    title: "Mechanical & On-Site Repair",
    short: "Fast mechanical fixes, fabrication repairs and metal maintenance.",
    icon: "wrench",
    points: [
      "Equipment & frame repair",
      "Custom brackets & metal parts",
      "Cutting, grinding & finishing",
      "Maintenance contracts available",
    ],
  },
];

export const stats = [
  { value: "Since 1991", label: "Established" },
  { value: "2,000+", label: "Projects delivered" },
  { value: "100%", label: "Certified welds" },
  { value: "24h", label: "Quote turnaround" },
];
