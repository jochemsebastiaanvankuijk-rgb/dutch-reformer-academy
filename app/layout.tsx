import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dutchreformeracademy.nl"),
  title: "Dutch Reformer Academy | Reformer Pilates Instructeursopleiding",
  description:
    "Word gecertificeerd Reformer Pilates instructeur met een exclusieve 5-daagse opleiding in Roosendaal. Maximaal 15 deelnemers, 40 contacturen en certificaat inbegrepen.",
  alternates: {
    canonical: "https://dutchreformeracademy.nl"
  },
  keywords: [
    "Reformer Pilates opleiding",
    "Pilates instructeursopleiding",
    "Reformer Pilates certificaat",
    "Pilates opleiding Roosendaal"
  ],
  openGraph: {
    title: "Word Gecertificeerd Reformer Pilates Instructeur",
    description:
      "Een intensieve 5-daagse opleiding in Roosendaal, gegeven door ervaren master trainers.",
    url: "https://dutchreformeracademy.nl",
    siteName: "Dutch Reformer Academy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Premium reformer pilates studio training"
      }
    ],
    locale: "nl_NL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dutch Reformer Academy",
    description: "5-daagse opleiding in Roosendaal voor maximaal 15 deelnemers."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
