import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://plcromero.es"),
  title: {
    default: "Romero — Fullstack Developer",
    template: "%s · Romero",
  },
  description:
    "Manuel Jesús Romero García (plcromero) — Fullstack Developer. APIs, plataformas SaaS y aplicaciones web modernas.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "CakePHP",
    "APIs REST",
    "SaaS",
    "React Native",
    "plcromero",
    "Romero",
  ],
  authors: [{ name: "Manuel Jesús Romero García", url: "https://plcromero.es" }],
  creator: "Manuel Jesús Romero García",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://plcromero.es",
    title: "Romero — Fullstack Developer",
    description:
      "Construyendo APIs, plataformas SaaS y aplicaciones web modernas. +2 años en producción.",
    siteName: "Romero · Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romero — Fullstack Developer",
    description:
      "Construyendo APIs, plataformas SaaS y aplicaciones web modernas.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
