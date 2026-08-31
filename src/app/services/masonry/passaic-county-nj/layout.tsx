import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Expert Masonry Contractors Serving Passaic County, NJ | Tiles & Stones",
  description:
    "Expert masonry contractors serving Passaic County, NJ for brick, stone, masonry repair, restoration, and exterior masonry projects.",
  keywords: [
    "masonry contractors Passaic County NJ",
    "masonry contractor Passaic County",
    "masonry repair Passaic County NJ",
    "brick repair NJ",
    "stone masonry NJ",
    "masonry restoration NJ",
  ],
  authors: [{ name: "Tiles & Stones" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Expert Masonry Contractors Serving Passaic County, NJ",
    description:
      "Expert masonry contractors serving Passaic County, NJ for brick, stone, masonry repair, restoration, and exterior masonry projects.",
    url: "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj",
    siteName: "Tiles & Stones",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/a1.webp",
        alt: "Masonry contractors serving Passaic County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Masonry Contractors Serving Passaic County, NJ",
    description:
      "Expert masonry contractors serving Passaic County, NJ for brick, stone, masonry repair, restoration, and exterior masonry projects.",
    images: [
      "https://www.tilesandstonesnj.com/images/a1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function MasonryServicesPassaicCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj#service",
        "name": "Masonry Services in Passaic County, NJ",
        "serviceType": "Masonry Services",
        "description": "Professional masonry services for residential and commercial properties throughout Passaic County, New Jersey, including masonry repair, brickwork, stonework, restoration, repointing, and related exterior masonry services.",
        "url": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#organization",
        "name": "Tiles & Stones",
        "url": "https://www.tilesandstonesnj.com/",
        "description": "Masonry and stonework services serving customers in New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey"
        },
        "knowsAbout": [
          "Masonry",
          "Brick Repair",
          "Stone Masonry",
          "Masonry Restoration",
          "Masonry Repointing",
          "Exterior Masonry",
          "Masonry Repair"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj#breadcrumb",
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
            "name": "Masonry Services in Passaic County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj",
        "name": "Expert Masonry Contractors Serving Passaic County, NJ",
        "description": "Expert masonry contractors serving Passaic County, NJ for brick, stone, masonry repair, restoration, and exterior masonry projects.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/passaic-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        "url": "https://www.tilesandstonesnj.com/",
        "name": "Tiles & Stones",
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