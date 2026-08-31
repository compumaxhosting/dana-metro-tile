import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Best Masonry Contractor in Bergen County NJ | Reliable Services",
  description:
    "Reliable masonry contractor in Bergen County, NJ offering brick repair, stonework, repointing, restoration, chimneys, and exterior masonry services.",
  keywords: [
    "masonry contractor Bergen County NJ",
    "best masonry contractor Bergen County",
    "masonry services Bergen County",
    "masonry repair Bergen County NJ",
    "brick repair Bergen County",
    "stone masonry Bergen County",
    "masonry restoration NJ",
    "brick pointing Bergen County",
    "chimney masonry repair NJ",
  ],
  authors: [{ name: "Tiles & Stones" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Best Masonry Contractor in Bergen County NJ | Reliable Services",
    description:
      "Reliable masonry contractor in Bergen County, NJ offering brick repair, stonework, repointing, restoration, chimneys, and exterior masonry services.",
    url: "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj",
    siteName: "Tiles & Stones",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/a1.webp",
        alt: "Masonry contractor providing brick and stone services in Bergen County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Masonry Contractor in Bergen County NJ | Reliable Services",
    description:
      "Reliable masonry contractor in Bergen County, NJ offering brick repair, stonework, repointing, restoration, chimneys, and exterior masonry services.",
    images: [
      "https://www.tilesandstonesnj.com/images/a1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function MasonryServicesBergenCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj#service",
        "name": "Masonry Services in Bergen County, NJ",
        "serviceType": [
          "Masonry Repair",
          "Brick Repair",
          "Stone Masonry",
          "Masonry Repointing",
          "Masonry Restoration",
          "Chimney Masonry Repair"
        ],
        "description": "Masonry services for properties in Bergen County, New Jersey, including brick and stone repair, repointing, restoration, chimney masonry, facade repairs, and related exterior masonry work.",
        "url": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
            "sameAs": "https://en.wikipedia.org/wiki/New_Jersey"
          }
        },
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones",
        "url": "https://www.tilesandstonesnj.com/",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey"
        },
        "knowsAbout": [
          "Masonry repair",
          "Brick repair",
          "Stone masonry",
          "Masonry restoration",
          "Masonry repointing",
          "Chimney repair",
          "Exterior masonry"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj",
        "name": "Best Masonry Contractor in Bergen County NJ | Reliable Masonry Services",
        "description": "Reliable masonry services in Bergen County, NJ, including brick repair, stonework, repointing, restoration, chimney masonry, and exterior masonry repairs.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj#breadcrumb",
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
            "name": "Bergen County, NJ Masonry Services",
            "item": "https://www.tilesandstonesnj.com/services/masonry/bergen-county-nj"
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