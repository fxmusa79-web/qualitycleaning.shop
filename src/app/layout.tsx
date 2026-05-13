import type { Metadata } from "next";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- Google Fonts via link tags */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quality Cleaning — Professionele reiniging op maat",
    template: "%s | Quality Cleaning",
  },
  description:
    "Mobiele reiniging met osmosewater: gevelreiniging, glazenwassen, zonnepanelen en autoreiniging. Professioneel en milieuvriendelijk in heel Nederland.",
  openGraph: {
    locale: "nl_NL",
    type: "website",
    siteName: "Quality Cleaning",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
