import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Stone Installation Contractor Bergen County NJ | Tiles & Stones NJ",
  description:
    "Looking for a stone installation contractor in Bergen County, NJ? Tiles & Stones NJ provides expert tile and natural stone installation.",
  keywords: [
    "stone installation contractor Bergen County NJ",
    "stone installers Bergen County NJ",
    "tile and stone contractor Bergen County NJ",
    "natural stone installation Bergen County NJ",
    "tile installation contractor Bergen County NJ",
    "custom stone installation NJ",
    "stone installation near me",
    "best stone installation contractor Bergen County NJ",
    "natural stone contractor near me",
    "residential stone installation Bergen County NJ",
    "commercial stone installation Bergen County NJ",
    "Bergen County NJ stone contractor",
    "Tiles & Stones NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Stone Installation Contractor Bergen County NJ | Tiles & Stones NJ",
    description:
      "Expert tile and natural stone installation in Bergen County, NJ from Tiles & Stones NJ. Professional solutions for residential and commercial projects.",
    url: "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/f1.webp",
        alt: "Professional stone installation in Bergen County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stone Installation Contractor Bergen County NJ | Tiles & Stones NJ",
    description:
      "Expert tile and natural stone installation in Bergen County, NJ from Tiles & Stones NJ.",
    images: [
      "https://www.tilesandstonesnj.com/images/f1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function StoneInstallationBergenCountyNjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Your JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj",
        "name": "Tile & Stone in Bergen County, NJ | Tiles & Stones NJ",
        "description": "Tiles & Stones NJ provides custom tile and natural stone solutions for kitchens, bathrooms, fireplaces, feature walls, and architectural interiors throughout Bergen County, NJ.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        "url": "https://www.tilesandstonesnj.com/",
        "name": "Tiles & Stones NJ",
        "publisher": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones NJ",
        "alternateName": "Metro Tile & Stone",
        "description": "Tile, stone and masonry contractor serving Bergen County and Northern New Jersey.",
        "url": "https://www.tilesandstonesnj.com/",
        "telephone": "+1-551-206-7097",
        "email": "info@tilesandstonesnj.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wayne",
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey"
          },
          {
            "@type": "City",
            "name": "Ridgewood"
          },
          {
            "@type": "City",
            "name": "Franklin Lakes"
          },
          {
            "@type": "City",
            "name": "Alpine"
          },
          {
            "@type": "City",
            "name": "Saddle River"
          },
          {
            "@type": "City",
            "name": "Upper Saddle River"
          },
          {
            "@type": "City",
            "name": "Tenafly"
          },
          {
            "@type": "City",
            "name": "Englewood"
          },
          {
            "@type": "City",
            "name": "Englewood Cliffs"
          },
          {
            "@type": "City",
            "name": "Paramus"
          },
          {
            "@type": "City",
            "name": "Wyckoff"
          },
          {
            "@type": "City",
            "name": "Glen Rock"
          },
          {
            "@type": "City",
            "name": "Ho-Ho-Kus"
          },
          {
            "@type": "City",
            "name": "Ramsey"
          },
          {
            "@type": "City",
            "name": "Mahwah"
          },
          {
            "@type": "City",
            "name": "Fort Lee"
          },
          {
            "@type": "City",
            "name": "Closter"
          },
          {
            "@type": "City",
            "name": "Cresskill"
          },
          {
            "@type": "City",
            "name": "Allendale"
          },
          {
            "@type": "City",
            "name": "Fair Lawn"
          },
          {
            "@type": "City",
            "name": "Bergenfield"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Dan Kush"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj#service",
        "name": "Tile & Stone Installation in Bergen County, NJ",
        "serviceType": [
          "Natural Stone Installation",
          "Tile Installation",
          "Stone Installation",
          "Custom Tile Installation",
          "Stone Countertop Installation",
          "Stone Fireplace Installation",
          "Feature Wall Installation"
        ],
        "description": "Custom tile and natural stone solutions for kitchens, bathrooms, fireplaces, feature walls, and architectural interiors throughout Bergen County, New Jersey.",
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        "url": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tile & Stone Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tile Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Kitchen Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bathroom Stone & Tile Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Architectural Fireplace Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Feature Wall & Book-Matched Stone Installation"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tilesandstonesnj.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.tilesandstonesnj.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Stone Installation",
            "item": "https://www.tilesandstonesnj.com/services/stones/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bergen County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/stones/bergen-county-nj"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}