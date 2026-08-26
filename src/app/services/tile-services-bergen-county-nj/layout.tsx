import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Tile Installation, Repair & Remodeling Contractors in Bergen County, NJ",
  description:
    "Expert tile installation, repair and remodeling contractors in Bergen County, NJ. Professional flooring, bathroom, kitchen and backsplash tile services.",
  keywords: [
    "tile installation Bergen County NJ",
    "tile repair Bergen County NJ",
    "tile remodeling Bergen County NJ",
    "tile contractors Bergen County NJ",
    "tile installation contractors Bergen County",
    "tile repair contractors Bergen County",
    "tile remodeling contractors Bergen County",
    "bathroom tile installation Bergen County NJ",
    "kitchen tile installation Bergen County NJ",
    "backsplash installation Bergen County NJ",
    "floor tile installation Bergen County NJ",
    "wall tile installation Bergen County NJ",
    "shower tile installation Bergen County NJ",
    "porcelain tile installation Bergen County NJ",
    "ceramic tile installation Bergen County NJ",
    "large format tile installation Bergen County NJ",
    "grout repair Bergen County NJ",
    "tile replacement Bergen County NJ",
    "residential tile contractors Bergen County NJ",
    "commercial tile contractors Bergen County NJ",
    "tile contractor near me Bergen County NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Tile Installation, Repair & Remodeling Contractors in Bergen County, NJ",
    description:
      "Expert tile installation, repair and remodeling contractors in Bergen County, NJ. Professional flooring, bathroom, kitchen and backsplash tile services.",
    url: "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/images/f4.webp",
        alt: "Professional tile installation, repair and remodeling services in Bergen County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Installation, Repair & Remodeling Contractors in Bergen County, NJ",
    description:
      "Expert tile installation, repair and remodeling contractors in Bergen County, NJ. Professional flooring, bathroom, kitchen and backsplash tile services.",
    images: [
      "/images/f4.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function TileServicesBergenCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj",
        "name": "Tile Installation, Repair & Remodeling Contractors in Bergen County, NJ",
        "description":
          "Professional tile installation, repair, replacement, and remodeling services for residential and commercial properties throughout Bergen County, New Jersey.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "url": "https://www.tilesandstonesnj.com/",
          "name": "Tiles & Stones NJ",
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj#service",
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj#service",
        "name": "Tile Installation, Repair & Remodeling Services in Bergen County, NJ",
        "url": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj",
        "description":
          "Tile installation, repair, replacement, and remodeling services for floors, walls, bathrooms, showers, kitchens, backsplashes, and other residential and commercial spaces in Bergen County, NJ.",
        "serviceType": [
          "Tile Installation",
          "Tile Repair",
          "Tile Replacement",
          "Tile Remodeling",
          "Floor Tile Installation",
          "Wall Tile Installation",
          "Bathroom Tile Installation",
          "Shower Tile Installation",
          "Kitchen Tile Installation",
          "Kitchen Backsplash Installation",
          "Porcelain Tile Installation",
          "Ceramic Tile Installation",
          "Large Format Tile Installation",
          "Grout Repair",
        ],
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
            "addressCountry": "US",
          },
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tilesandstonesnj.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.tilesandstonesnj.com/services/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tile Services in Bergen County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/tile-services-bergen-county-nj",
          },
        ],
      },
    ],
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