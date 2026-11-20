import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Natural Stone in Wayne, NJ | Tiles & Stones NJ",
  description:
    "Explore premium natural stone in Wayne, NJ, including marble, quartzite, travertine and onyx for custom countertops, fireplaces and feature walls.",
  keywords: [
    "natural stone Wayne NJ",
    "stone Wayne NJ",
    "natural stone slabs Wayne NJ",
    "marble Wayne NJ",
    "quartzite Wayne NJ",
    "stone countertops Wayne NJ",
    "stone installation Wayne NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Natural Stone in Wayne, NJ | Tiles & Stones NJ",
    description:
      "Explore premium natural stone in Wayne, NJ, including marble, quartzite, travertine and onyx for custom countertops, fireplaces and feature walls.",
    url: "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/f1.webp",
        alt: "Premium natural stone surfaces in Wayne, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Stone in Wayne, NJ | Tiles & Stones NJ",
    description:
      "Explore premium natural stone in Wayne, NJ, including marble, quartzite, travertine and onyx for custom countertops, fireplaces and feature walls.",
    images: [
      "https://www.tilesandstonesnj.com/images/f1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function NaturalStoneWayneCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj",
        "name": "Natural Stone & Slabs in Wayne County, NJ | Tiles & Stones NJ",
        "description": "Explore premium natural stone and stone slabs in Wayne County, NJ for countertops, fireplaces, walls and custom architectural applications.",
        "isPartOf": {
          "@id": "https://www.tilesandstonesnj.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj#breadcrumb"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj#service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj#service",
        "name": "Natural Stone & Slabs in Wayne County, NJ",
        "serviceType": "Natural Stone Supply",
        "description": "Premium natural stone and stone slabs serving homeowners, designers, contractors and businesses throughout Wayne County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Wayne County, New Jersey",
          "sameAs": "https://en.wikipedia.org/wiki/Wayne_County,_New_Jersey"
        },
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "url": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones NJ",
        "url": "https://www.tilesandstonesnj.com/",
        "image": "https://www.tilesandstonesnj.com/images/f1.webp",
        "priceRange": "$$$",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Wayne County, New Jersey"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj#breadcrumb",
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
            "name": "Stones",
            "item": "https://www.tilesandstonesnj.com/services/stones/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Wayne County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/stones/wayne-county-nj"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        "url": "https://www.tilesandstonesnj.com/",
        "name": "Tiles & Stones NJ",
        "publisher": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        }
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