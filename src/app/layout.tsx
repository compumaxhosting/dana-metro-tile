import type { Metadata, Viewport } from "next";
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

// In Next.js App Router, themeColor should be exported in the Viewport object
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tilesandstonesnj.com"),
  
  title: {
    default: "Tile, Stone & Masonry Contractors in Wayne, NJ | Tiles & Stones NJ",
    template: "%s | Tiles & Stones NJ", 
  },
  
  description: "Expert tile, stone and masonry services in Wayne, NJ. Quality craftsmanship, professional installation and beautiful results for residential and commercial projects.",
  
  keywords: [
    "tile services Wayne NJ",
    "tile installation Wayne NJ",
    "stone services Wayne NJ",
    "stone installation Wayne NJ",
    "masonry services Wayne NJ",
    "masonry contractor Wayne NJ",
    "tile contractor Wayne NJ",
    "stone contractor Wayne NJ"
  ],
  
  authors: [{ name: "Tiles & Stones NJ" }],
  
  referrer: "strict-origin-when-cross-origin",
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: "/",
  },
  
  icons: {
    icon: "/images/favicon.ico",
  },

  openGraph: {
    type: "website",
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | Tiles & Stones NJ",
    description: "Expert tile, stone and masonry services in Wayne, NJ with quality craftsmanship and professional installation for residential and commercial projects.",
    url: "https://www.tilesandstonesnj.com/",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/logoo.png",
        width: 1200,
        height: 630,
        alt: "Tile, stone and masonry services in Wayne, New Jersey",
      }
    ],
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | Tiles & Stones NJ",
    description: "Expert tile, stone and masonry services in Wayne, NJ with quality craftsmanship and professional installation.",
    images: ["/logoo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      "name": "Metro Tile & Stone",
      "url": "https://www.tilesandstonesnj.com/",
      "telephone": "+1-551-206-7097",
      "email": "info@metrotilesandstones.com",
      "description": "Premium tile, stone, and masonry services designed, fabricated, and installed with precision in Wayne, New Jersey and across New Jersey.",
      "image": "https://www.tilesandstonesnj.com/logoo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wayne",
        "addressRegion": "NJ",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "New Jersey"
      },
      "priceRange": "$$$",
      "sameAs": [
        "https://www.tilesandstonesnj.com/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tile, Stone & Masonry Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tile Services",
              "description": "Ceramic and porcelain tile installations for refined floors, walls, showers, kitchens, and feature details."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stone Services",
              "description": "Marble, travertine, and stone slab fabrication and installation for elegant surfaces and architectural details."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Masonry Services",
              "description": "Custom masonry work and architectural detailing built with precision and enduring craftsmanship."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tilesandstonesnj.com/#website",
      "url": "https://www.tilesandstonesnj.com/",
      "name": "Metro Tile & Stone",
      "publisher": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tilesandstonesnj.com/#webpage",
      "url": "https://www.tilesandstonesnj.com/",
      "name": "Tile, Stone & Masonry Services in Wayne, NJ",
      "description": "Expert tile, stone and masonry services in Wayne, NJ with quality craftsmanship and professional installation.",
      "isPartOf": {
        "@id": "https://www.tilesandstonesnj.com/#website"
      },
      "about": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tilesandstonesnj.com/"
          }
        ]
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-cormorant">
        {children}
      </body>
    </html>
  );
}