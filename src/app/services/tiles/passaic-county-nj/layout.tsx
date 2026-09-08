import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Flooring & Tile Installation Contractors in Passaic, New Jersey",
  description:
    "Expert flooring and tile installation contractors in Passaic, NJ. Get professional tile, flooring, repair, and installation services from Tiles and Stones NJ.",
  keywords: [
    "flooring contractors Passaic NJ",
    "tile installation contractors Passaic NJ",
    "flooring installation Passaic New Jersey",
    "tile contractors Passaic NJ",
    "flooring and tile installation Passaic",
    "tile installation near me",
    "flooring contractors near me",
    "professional tile installation NJ",
    "flooring installation services Passaic",
    "Who are the best flooring and tile installation contractors in Passaic, NJ",
    "flooring and tile installation contractors near me in Passaic, NJ",
    "where can I find professional tile installers in Passaic, NJ",
    "who provides flooring installation services in Passaic, NJ",
    "affordable flooring and tile installation services in Passaic, NJ",
  ],
  authors: [{ name: "Tiles and Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Flooring & Tile Installation Contractors in Passaic, New Jersey",
    description:
      "Professional flooring and tile installation contractors in Passaic, NJ. Expert installation, repair, and restoration services from Tiles and Stones NJ.",
    url: "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj",
    siteName: "Tiles and Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/tiles/passaic-county-nj.jpg",
        alt: "Flooring and tile installation services in Passaic, New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring & Tile Installation Contractors in Passaic, New Jersey",
    description:
      "Professional flooring and tile installation contractors in Passaic, NJ. Expert installation, repair, and restoration services.",
    images: [
      "https://www.tilesandstonesnj.com/images/tiles/hero-tiles.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function FlooringTileInstallationPassaicNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj",
        "name": "Tile Installation, Repair & Remodeling in Passaic County, NJ",
        "description": "Residential and commercial tile installation, repair, replacement, remodeling, flooring, bathroom, kitchen, backsplash, and grout services throughout Passaic County, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "url": "https://www.tilesandstonesnj.com/",
          "name": "Tiles & Stones NJ"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj#service"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.tilesandstonesnj.com/images/hero-tiles.webp"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj#service",
        "name": "Tile Services in Passaic County, NJ",
        "serviceType": [
          "Tile Installation",
          "Tile Repair",
          "Tile Replacement",
          "Tile Remodeling",
          "Floor Tile Installation",
          "Floor Tile Repair",
          "Wall Tile Installation",
          "Bathroom Tile Installation",
          "Shower Tile Installation",
          "Kitchen Backsplash Installation",
          "Large-Format Tile Installation",
          "Grout Repair"
        ],
        "description": "Professional residential and commercial tile installation, repair, replacement, remodeling, flooring, bathroom, kitchen, backsplash, wall tile, large-format tile, and grout services throughout Passaic County, New Jersey.",
        "url": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.tilesandstonesnj.com/#business",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/",
          "telephone": "+1-551-206-7097",
          "email": "info@tilesandstonesnj.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wayne",
            "addressRegion": "NJ",
            "addressCountry": "US"
          }
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj#breadcrumb",
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
            "name": "Tile Services in Passaic County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/tiles/passaic-county-nj"
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