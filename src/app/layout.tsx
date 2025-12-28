import type { Metadata } from "next";
import { Geist, Cinzel, Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Convextra Redovisning AB - Digital Redovisningsbyrå Västerås",
    template: "%s | Convextra Redovisning",
  },
  description: "Convextra Redovisning – din digitala redovisningsbyrå i Västerås. Vi hjälper företag med bokföring, löner, bokslut och ekonomisk rådgivning. Boka gratis samtal.",
  metadataBase: new URL("https://convextraredovisning.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://convextraredovisning.se",
    siteName: "Convextra Redovisning AB",
    title: "Convextra Redovisning AB - Digital Redovisningsbyrå Västerås",
    description: "Din digitala redovisningsbyrå med personligt engagemang. Bokföring, löner, bokslut och ekonomisk rådgivning i Västerås.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Convextra Redovisning AB - Digital redovisningsbyrå",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convextra Redovisning AB - Digital Redovisningsbyrå",
    description: "Din digitala redovisningsbyrå med personligt engagemang i Västerås.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "din-google-verification-kod", // Lägg till när du verifierar i Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${cinzel.variable} ${playfair.variable} ${quicksand.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
