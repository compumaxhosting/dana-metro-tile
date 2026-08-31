import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Tile & Stone Services in Passaic County, NJ | Expert Installation & Repair",
  description:
    "Get expert tile and stone installation and repair services in Passaic County, NJ. Quality craftsmanship for kitchens, bathrooms, fireplaces, floors, and more.",
  keywords: [
    "tile and stone services Passaic County NJ",
    "tile installation Passaic County NJ",
    "stone installation Passaic County NJ",
    "tile repair NJ",
    "stone repair NJ",
    "expert tile installation",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Tile & Stone Services in Passaic County, NJ | Expert Installation & Repair",
    description:
      "Get expert tile and stone installation and repair services in Passaic County, NJ. Quality craftsmanship for kitchens, bathrooms, fireplaces, floors, and more.",
    url: "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/f1.webp",
        alt: "Expert tile and stone installation and repair in Passaic County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Stone Services in Passaic County, NJ | Expert Installation & Repair",
    description:
      "Get expert tile and stone installation and repair services in Passaic County, NJ. Quality craftsmanship for kitchens, bathrooms, fireplaces, floors, and more.",
    images: [
      "https://www.tilesandstonesnj.com/images/f1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function StoneInstallationPassaicCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj",
        "name": "Tile & Stone Services in Passaic County, NJ",
        "description": "Tile and natural stone services for kitchens, bathrooms, fireplaces, feature walls, vanities, bars, and custom installations throughout Passaic County, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "url": "https://www.tilesandstonesnj.com/",
          "name": "Tiles & Stones NJ"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj#breadcrumb"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj#service",
        "name": "Tile & Stone Services in Passaic County, NJ",
        "serviceType": [
          "Tile Installation",
          "Stone Installation",
          "Natural Stone Installation",
          "Kitchen Stone Installation",
          "Bathroom Stone Installation",
          "Fireplace Stone Installation",
          "Feature Wall Installation",
          "Custom Tile and Stone Installation"
        ],
        "description": "Custom tile and natural stone services for residential and architectural projects throughout Passaic County, NJ.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.tilesandstonesnj.com/#business",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/",
          "telephone": "+1-551-206-7097",
          "email": "info@metrotilesandstones.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wayne",
            "addressRegion": "NJ",
            "addressCountry": "US"
          },
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": "Passaic County, New Jersey"
            },
            {
              "@type": "City",
              "name": "Wayne"
            },
            {
              "@type": "City",
              "name": "Clifton"
            },
            {
              "@type": "City",
              "name": "Paterson"
            },
            {
              "@type": "City",
              "name": "Totowa"
            },
            {
              "@type": "City",
              "name": "Little Falls"
            },
            {
              "@type": "City",
              "name": "Woodland Park"
            },
            {
              "@type": "City",
              "name": "Pompton Lakes"
            },
            {
              "@type": "City",
              "name": "Ringwood"
            },
            {
              "@type": "City",
              "name": "Wanaque"
            },
            {
              "@type": "City",
              "name": "Hawthorne"
            },
            {
              "@type": "City",
              "name": "Haledon"
            },
            {
              "@type": "City",
              "name": "North Haledon"
            },
            {
              "@type": "City",
              "name": "Prospect Park"
            },
            {
              "@type": "City",
              "name": "Passaic"
            }
          ],
          "priceRange": "$$"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County, NJ"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj#breadcrumb",
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
            "name": "Passaic County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/stones/passaic-county-nj"
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