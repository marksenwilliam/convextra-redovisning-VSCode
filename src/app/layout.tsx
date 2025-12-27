import type { Metadata } from "next";
import { Geist, Inter, Cinzel, Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convextra Redovisning AB - Redovisningsbyrå Västerås",
  description: "Convextra Redovisning – din digitala redovisningsbyrå i Västerås. Vi hjälper företag med bokföring, löner, bokslut och ekonomisk rådgivning. Boka gratis samtal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${inter.variable} ${cinzel.variable} ${quicksand.variable} ${playfair.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
