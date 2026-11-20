import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Custom Masonry Wayne NJ | Tiles & Stones NJ",
  description:
    "Custom masonry in Wayne, NJ for fireplaces, feature walls, exterior stonework and architectural features. Serving Northern New Jersey.",
  keywords: [
    "masonry Wayne NJ",
    "masonry contractor Wayne NJ",
    "custom masonry Wayne County NJ",
    "stonework Wayne NJ",
    "fireplace masonry Wayne NJ",
    "masonry services Northern NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Custom Masonry Wayne NJ | Tiles & Stones NJ",
    description:
      "Custom masonry in Wayne, NJ for fireplaces, feature walls, exterior stonework and architectural features. Serving Northern New Jersey.",
    url: "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/a1.webp",
        alt: "Custom Masonry Detailing and Craft in Wayne NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Masonry Wayne NJ | Tiles & Stones NJ",
    description:
      "Custom masonry in Wayne, NJ for fireplaces, feature walls, exterior stonework and architectural features. Serving Northern New Jersey.",
    images: [
      "https://www.tilesandstonesnj.com/images/a1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function MasonryServicesWayneCountyNjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Your JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj#service",
        "name": "Custom Masonry Services in Wayne County, NJ",
        "serviceType": "Masonry Services",
        "description": "Custom masonry services for residential and commercial properties in Wayne County, New Jersey, including stonework, fireplaces, feature walls, exterior masonry and architectural detailing.",
        "url": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.tilesandstonesnj.com/#organization",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Wayne County, New Jersey",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "sameAs": "https://en.wikipedia.org/wiki/New_Jersey"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Masonry Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Stonework"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fireplace Masonry"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Feature Walls"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior Masonry"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Architectural Masonry Detailing"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj",
        "name": "Custom Masonry Wayne NJ | Tiles & Stones NJ",
        "description": "Custom masonry in Wayne, NJ for fireplaces, feature walls, exterior stonework and architectural features. Serving Northern New Jersey.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj#breadcrumb",
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
            "name": "Masonry",
            "item": "https://www.tilesandstonesnj.com/services/masonry/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Wayne County Masonry Services",
            "item": "https://www.tilesandstonesnj.com/services/masonry/wayne-county-nj"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        "url": "https://www.tilesandstonesnj.com/",
        "name": "Tiles & Stones NJ",
        "publisher": {
          "@id": "https://www.tilesandstonesnj.com/#organization"
        },
        "inLanguage": "en-US"
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