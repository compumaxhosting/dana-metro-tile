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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tilesandstonesnj.com"),
  
  title: {
    default: "Tile, Stone & Masonry Contractors in Wayne, NJ | Tiles & Stones NJ",
    template: "%s | Tiles & Stones NJ", 
  },
  
  description: "Expert tile, stone and masonry services in Wayne, NJ, Passaic County, Bergen County, Morris County and Essex County. Quality craftsmanship and professional installation for residential and commercial projects.",
  
  keywords: [
    "tile contractor Wayne NJ",
    "tile installation Wayne NJ",
    "stone contractor Wayne NJ",
    "masonry services Wayne NJ",
    "tile and stone contractor near me",
    "tile installation near me",
    "stone installation near me",
    "masonry contractor near me",
    "best tile contractor in Wayne NJ",
    "who installs tile in Wayne NJ",
    "who installs stone in Wayne NJ",
    "tile contractor Passaic County NJ",
    "tile contractor Bergen County NJ",
    "tile contractor Morris County NJ",
    "tile contractor Essex County NJ",
    "stone contractor Passaic County NJ",
    "stone contractor Bergen County NJ",
    "stone contractor Morris County NJ",
    "stone contractor Essex County NJ",
    "masonry contractor Passaic County NJ",
    "masonry contractor Bergen County NJ",
    "masonry contractor Morris County NJ",
    "masonry contractor Essex County NJ",
    "residential tile installation NJ",
    "commercial tile installation NJ",
    "residential stone installation NJ",
    "commercial stone installation NJ",
    "professional tile and stone installation NJ"
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
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "LocalBusiness",
        "HomeAndConstructionBusiness"
      ],
      "@id": "https://www.tilesandstonesnj.com/#business",
      "name": "Tiles & Stones NJ",
      "url": "https://www.tilesandstonesnj.com/",
      "description": "Expert tile, stone and masonry services in Wayne, NJ, Passaic County, Bergen County, Morris County and Essex County. Quality craftsmanship and professional installation for residential and commercial projects.",
      "image": "/logo.png",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      },
      "telephone": "[BUSINESS PHONE]",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET ADDRESS]",
        "addressLocality": "Wayne",
        "addressRegion": "NJ",
        "postalCode": "[ZIP CODE]",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Wayne",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Essex County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tile, Stone & Masonry Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tile Installation",
              "serviceType": "Tile Installation",
              "areaServed": [
                "Wayne, NJ",
                "Passaic County, NJ",
                "Bergen County, NJ",
                "Morris County, NJ",
                "Essex County, NJ"
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stone Installation",
              "serviceType": "Stone Installation",
              "areaServed": [
                "Wayne, NJ",
                "Passaic County, NJ",
                "Bergen County, NJ",
                "Morris County, NJ",
                "Essex County, NJ"
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Masonry Services",
              "serviceType": "Masonry Services",
              "areaServed": [
                "Wayne, NJ",
                "Passaic County, NJ",
                "Bergen County, NJ",
                "Morris County, NJ",
                "Essex County, NJ"
              ]
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tilesandstonesnj.com/#website",
      "url": "https://www.tilesandstonesnj.com/",
      "name": "Tiles & Stones NJ",
      "description": "Tile, stone and masonry services in Wayne, NJ and surrounding New Jersey counties.",
      "publisher": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tilesandstonesnj.com/#webpage",
      "url": "https://www.tilesandstonesnj.com/",
      "name": "Tile, Stone & Masonry Contractors in Wayne, NJ | Tiles & Stones NJ",
      "description": "Expert tile, stone and masonry services in Wayne, NJ, Passaic County, Bergen County, Morris County and Essex County. Quality craftsmanship and professional installation for residential and commercial projects.",
      "isPartOf": {
        "@id": "https://www.tilesandstonesnj.com/#website"
      },
      "about": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "inLanguage": "en-US"
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BW33N31ELB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BW33N31ELB');
            `,
          }}
        />

        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="89b785854a5da7f0064a09fc3b8137f5" />

        {/* JSON-LD Schema */}
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