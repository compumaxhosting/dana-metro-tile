import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Residential & Commercial Masonry Services Essex County NJ",
  description:
    "Residential and commercial masonry services in Essex County, NJ for brick repair, stonework, repointing, restoration, chimneys, walls, and facades.",
  keywords: [
    "residential masonry services Essex County NJ",
    "commercial masonry services Essex County NJ",
    "masonry contractor Essex County NJ",
    "masonry repair Essex County",
    "brick repair Essex County NJ",
    "stone masonry Essex County",
    "masonry restoration Essex County",
    "chimney masonry repair Essex County",
  ],
  authors: [{ name: "Tiles & Stones" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Residential & Commercial Masonry Services Essex County NJ",
    description:
      "Residential and commercial masonry services in Essex County, NJ for brick repair, stonework, repointing, restoration, chimneys, walls, and facades.",
    url: "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj",
    siteName: "Tiles & Stones",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/a1.webp",
        alt: "Residential and commercial masonry services in Essex County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential & Commercial Masonry Services Essex County NJ",
    description:
      "Residential and commercial masonry services in Essex County, NJ for brick repair, stonework, repointing, restoration, chimneys, walls, and facades.",
    images: [
      "https://www.tilesandstonesnj.com/images/a1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function MasonryServicesEssexCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj#service",
        "name": "Residential and Commercial Masonry Services in Essex County, NJ",
        "serviceType": [
          "Residential Masonry Services",
          "Commercial Masonry Services",
          "Brick Repair",
          "Stone Masonry",
          "Masonry Repointing",
          "Masonry Restoration",
          "Chimney Masonry Repair",
          "Facade Masonry Repair"
        ],
        "description": "Residential and commercial masonry services in Essex County, New Jersey, including brick repair, stonework, mortar repointing, masonry restoration, chimney repairs, facade repairs, and exterior masonry work.",
        "url": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Residential Property Owners"
          },
          {
            "@type": "Audience",
            "audienceType": "Commercial Property Owners"
          },
          {
            "@type": "Audience",
            "audienceType": "Property Managers"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones",
        "url": "https://www.tilesandstonesnj.com/",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey"
        },
        "knowsAbout": [
          "Residential masonry",
          "Commercial masonry",
          "Brick repair",
          "Stone masonry",
          "Masonry repointing",
          "Masonry restoration",
          "Chimney repair",
          "Facade repair",
          "Exterior masonry"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj",
        "name": "Residential and Commercial Masonry Services in Essex County, NJ",
        "description": "Residential and commercial masonry services in Essex County, NJ for brick repair, stonework, repointing, restoration, chimneys, walls, and facades.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj#breadcrumb",
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
            "name": "Essex County Masonry Services",
            "item": "https://www.tilesandstonesnj.com/services/masonry/essex-county-nj"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        "url": "https://www.tilesandstonesnj.com/",
        "name": "Tiles & Stones",
        "publisher": {
          "@id": "https://www.tilesandstonesnj.com/#business"
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