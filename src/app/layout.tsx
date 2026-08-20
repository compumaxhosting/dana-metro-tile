import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // IMPORTANT: Replace this URL with your actual live domain once deployed
  metadataBase: new URL("https://tilesandstonesnj.com"), 
  
  title: {
    default: "Dan Kush Metro Group Construction | Premium Tile, Stone & Masonry",
    template: "%s | Dan Kush Metro Group", // Automatically appends your brand to child pages
  },
  
  description: "Dan Kush Metro Group Construction is a premier provider of high-quality tile, stone, and masonry services in New Jersey. With a commitment to craftsmanship and attention to detail, we bring your vision to life with precision and artistry.",
  
  icons: {
    icon: "/images/favicon.ico",
  },

  // Global Open Graph settings for social media sharing
  openGraph: {
    title: "Dan Kush Metro Group Construction",
    description: "Premier provider of high-quality tile, stone, and masonry services in New Jersey.",
    url: "/",
    siteName: "Dan Kush Metro Group Construction",
    images: [
      {
        url: "/images/default-og-image.webp", // Add a nice fallback image of your work here
        width: 1200,
        height: 630,
        alt: "Dan Kush Metro Group Construction Portfolio",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-cormorant">{children}</body>
    </html>
  );
}