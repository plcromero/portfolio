import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { seo, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${seo.name} — ${seo.jobTitle}`,
    template: `%s · ${seo.name}`,
  },
  description: seo.description,
  applicationName: seo.name,
  keywords: seo.keywords,
  authors: [{ name: seo.fullName, url: siteUrl }],
  creator: seo.fullName,
  publisher: seo.fullName,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: siteUrl,
    title: `${seo.name} — ${seo.jobTitle}`,
    description: seo.shortDescription,
    siteName: `${seo.name} · Portfolio`,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${seo.name} — ${seo.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: seo.twitter,
    site: seo.twitter,
    title: `${seo.name} — ${seo.jobTitle}`,
    description: seo.shortDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": `${seo.country}-${seo.region}`,
    "geo.placename": "España",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#0d1117" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={seo.language} className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
