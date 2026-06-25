import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Steel Fabrication & Welding in Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "steel fabrication Dubai",
    "welding workshop Al Qusais",
    "structural steel UAE",
    "gates and railings Dubai",
    "MIG TIG welding Dubai",
    "car repair Al Qusais",
    "Ghafan Steel Works",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Steel Fabrication & Welding in Dubai`,
    description: site.description,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Steel Fabrication & Welding in Dubai`,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0b0d",
};

function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    alternateName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneRaw,
    image: `${site.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: "Dubai, United Arab Emirates",
    priceRange: "$$",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
