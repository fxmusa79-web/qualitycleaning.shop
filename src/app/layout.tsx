import type { Metadata } from "next";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- Google Fonts via link tags */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://qualitycleaning.shop";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quality Cleaning Groningen — Professionele reiniging met osmosewater",
    template: "%s | Quality Cleaning",
  },
  description:
    "Mobiele reiniging met osmosewater: gevelreiniging, glazenwassen, zonnepanelen en autoreiniging. Professioneel, milieuvriendelijk en aan huis — bel 06-49988924.",
  keywords: [
    "glazenwassen Groningen",
    "gevelreiniging Groningen",
    "zonnepanelen reinigen Groningen",
    "autoreiniging aan huis",
    "osmosewater reiniging",
    "mobiele reiniging Nederland",
    "professionele schoonmaak",
    "Quality Cleaning",
  ],
  openGraph: {
    locale: "nl_NL",
    type: "website",
    siteName: "Quality Cleaning",
    url: siteUrl,
    title: "Quality Cleaning Groningen — Professionele reiniging met osmosewater",
    description:
      "Mobiele reiniging met osmosewater: gevelreiniging, glazenwassen, zonnepanelen en autoreiniging. Professioneel, milieuvriendelijk en aan huis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quality Cleaning — Professionele reiniging met osmosewater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Cleaning — Professionele reiniging met osmosewater",
    description:
      "Mobiele reiniging met osmosewater: gevelreiniging, glazenwassen, zonnepanelen en autoreiniging.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Quality Cleaning",
  description:
    "Mobiele reiniging met osmosewater: gevelreiniging, glazenwassen, zonnepanelen reinigen en autoreiniging.",
  url: siteUrl,
  telephone: "+31649988924",
  email: "info@qualitycleaning050.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Iepenlaan 61",
    postalCode: "9741 GB",
    addressLocality: "Groningen",
    addressRegion: "Groningen",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigingsdiensten",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gevelreiniging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Glazenwassen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zonnepanelen reinigen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autoreiniging aan huis" } },
    ],
  },
  sameAs: [
    "https://wa.me/31649988924",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
