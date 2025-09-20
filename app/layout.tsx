import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "./(site)/layout";

// Local brand/display font for large wordmarks
const displayFont = localFont({
  src: [
    { path: "../public/assets/fonts/SpecialGothicExpandedOne-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/SpecialGothicExpandedOne-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-display",
});

// Sans for UI
const sansFont = localFont({
  src: [
    { path: "../public/assets/fonts/Montserrat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-sans",
});

// Serif for long-form text
const serifFont = localFont({
  src: [
    { path: "../public/assets/fonts/Baskervville-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/Baskervville-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "LJUSDAL — Functional Digital Objects",
  description: "LJUSDAL is a Frankfurt-based app production studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${sansFont.variable} ${serifFont.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
