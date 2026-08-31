import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Natural & Architectural Stone Services in Essex County, NJ",
  description:
    "Explore natural and architectural stone services in Essex County, NJ, including custom marble, quartzite, travertine, onyx, tile, fireplaces and feature walls.",
  keywords: [
    "Natural & Architectural Stone Services in Essex County NJ",
    "natural stone services Essex County NJ",
    "architectural stone services Essex County NJ",
    "natural stone contractor Essex County NJ",
    "architectural stone contractor Essex County NJ",
    "stone installation Essex County NJ",
    "natural stone installation Essex County NJ",
    "architectural stone installation Essex County NJ",
    "stone contractor Essex County NJ",
    "tile and stone contractor Essex County NJ",
    "custom stone installation Essex County NJ",
    "stone installers Essex County NJ",
    "tile installation Essex County NJ",
    "marble installation Essex County NJ",
    "quartzite installation Essex County NJ",
    "travertine installation Essex County NJ",
    "onyx installation Essex County NJ",
    "natural stone contractor Montclair NJ",
    "stone contractor Short Hills NJ",
    "stone contractor Livingston NJ",
    "stone contractor West Orange NJ",
    "custom stonework Essex County NJ",
    "luxury stone installation Essex County NJ",
    "stone countertops Essex County NJ",
    "tile backsplash Essex County NJ",
    "fireplace stone installation Essex County NJ",
    "stone feature walls Essex County NJ",
    "book-matched stone installation Essex County NJ",
    "custom marble installation Essex County NJ",
    "quartzite countertops Essex County NJ",
    "natural stone fireplace Essex County NJ",
    "high-end natural stone installation Essex County NJ",
    "who provides natural stone services in Essex County NJ",
    "where can I find an architectural stone contractor in Essex County NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/stones/essex-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Natural & Architectural Stone Services in Essex County, NJ",
    description:
      "Explore natural and architectural stone services in Essex County, NJ, including custom marble, quartzite, travertine, onyx, tile, fireplaces and feature walls.",
    url: "https://www.tilesandstonesnj.com/services/stones/essex-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/f1.webp",
        alt: "Natural and architectural stone services in Essex County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural & Architectural Stone Services in Essex County, NJ",
    description:
      "Explore natural and architectural stone services in Essex County, NJ, including custom marble, quartzite, travertine, onyx, tile, fireplaces and feature walls.",
    images: [
      "https://www.tilesandstonesnj.com/images/f1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function StoneInstallationEssexCountyNjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Your JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones NJ",
        "url": "https://www.tilesandstonesnj.com/",
        "telephone": "+1-551-206-7097",
        "email": "info@metrotilesandstones.com",
        "description": "Tiles & Stones NJ provides tile, natural stone and masonry services for residential and commercial projects throughout Essex County, New Jersey.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wayne",
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey"
          },
          {
            "@type": "City",
            "name": "Montclair, New Jersey"
          },
          {
            "@type": "City",
            "name": "West Orange, New Jersey"
          },
          {
            "@type": "City",
            "name": "Livingston, New Jersey"
          },
          {
            "@type": "Place",
            "name": "Short Hills, New Jersey"
          },
          {
            "@type": "City",
            "name": "Maplewood, New Jersey"
          },
          {
            "@type": "City",
            "name": "South Orange, New Jersey"
          },
          {
            "@type": "City",
            "name": "Millburn, New Jersey"
          },
          {
            "@type": "City",
            "name": "Summit, New Jersey"
          },
          {
            "@type": "City",
            "name": "Glen Ridge, New Jersey"
          },
          {
            "@type": "City",
            "name": "Verona, New Jersey"
          },
          {
            "@type": "City",
            "name": "Cedar Grove, New Jersey"
          },
          {
            "@type": "City",
            "name": "Essex Fells, New Jersey"
          },
          {
            "@type": "City",
            "name": "North Caldwell, New Jersey"
          },
          {
            "@type": "City",
            "name": "Caldwell, New Jersey"
          },
          {
            "@type": "City",
            "name": "Fairfield, New Jersey"
          },
          {
            "@type": "City",
            "name": "Roseland, New Jersey"
          },
          {
            "@type": "City",
            "name": "Bloomfield, New Jersey"
          },
          {
            "@type": "City",
            "name": "Nutley, New Jersey"
          },
          {
            "@type": "City",
            "name": "Belleville, New Jersey"
          },
          {
            "@type": "City",
            "name": "Orange, New Jersey"
          },
          {
            "@type": "City",
            "name": "East Orange, New Jersey"
          },
          {
            "@type": "City",
            "name": "Newark, New Jersey"
          }
        ],
        "knowsAbout": [
          "Natural Stone",
          "Architectural Stone",
          "Tile Installation",
          "Stone Installation",
          "Marble",
          "Quartzite",
          "Travertine",
          "Onyx",
          "Stone Countertops",
          "Kitchen Backsplashes",
          "Bathroom Stone",
          "Fireplace Stone",
          "Feature Walls",
          "Book-Matched Stone",
          "Custom Tile"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj#service",
        "name": "Natural & Architectural Stone Services in Essex County, NJ",
        "serviceType": [
          "Natural Stone Services",
          "Architectural Stone Services",
          "Tile Installation",
          "Stone Installation"
        ],
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "url": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        },
        "description": "Natural and architectural stone services in Essex County, NJ, including custom kitchens, bathrooms, fireplaces, feature walls, book-matched installations, countertops, backsplashes and precision tile work.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Essex County Tile & Stone Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Natural Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Architectural Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Tile Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Stone Countertops, Islands & Backsplashes"
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
                "name": "Fireplace & Feature Wall Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Book-Matched Stone Installation"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj",
        "name": "Natural & Architectural Stone Services in Essex County, NJ",
        "description": "Explore natural and architectural stone services in Essex County, NJ, including custom marble, quartzite, travertine, onyx, tile, fireplaces and feature walls.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj#breadcrumb",
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
            "name": "Stone Services",
            "item": "https://www.tilesandstonesnj.com/services/stones/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Essex County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/stones/essex-county-nj"
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