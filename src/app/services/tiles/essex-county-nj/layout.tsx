import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Residential & Commercial Tile Services in Essex County, NJ",
  description:
    "Expert residential and commercial tile services in Essex County, NJ, including tile installation, repair, remodeling, flooring, bathrooms, kitchens, and backsplashes.",
  keywords: [
    "tile services Essex County NJ",
    "residential tile services Essex County NJ",
    "commercial tile services Essex County NJ",
    "tile installation Essex County NJ",
    "tile contractors Essex County NJ",
    "tile repair Essex County NJ",
    "tile remodeling Essex County NJ",
    "bathroom tile installation Essex County NJ",
    "kitchen tile installation Essex County NJ",
    "shower tile installation Essex County NJ",
    "floor tile installation Essex County NJ",
    "backsplash installation Essex County NJ",
    "ceramic tile installation Essex County NJ",
    "porcelain tile installation Essex County NJ",
    "large format tile installation Essex County NJ",
    "wall tile installation Essex County NJ",
    "grout repair Essex County NJ",
    "tile replacement Essex County NJ",
    "commercial tile contractors Essex County NJ",
    "residential tile contractors Essex County NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Residential & Commercial Tile Services in Essex County, NJ",
    description:
      "Expert residential and commercial tile services in Essex County, NJ, including tile installation, repair, remodeling, flooring, bathrooms, kitchens, and backsplashes.",
    url: "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/images/f3.webp",
        alt: "Residential and commercial tile services in Essex County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential & Commercial Tile Services in Essex County, NJ",
    description:
      "Expert residential and commercial tile services in Essex County, NJ, including tile installation, repair, remodeling, flooring, bathrooms, kitchens, and backsplashes.",
    images: [
      "/images/f3.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function TileServicesEssexCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj",
        "name": "Residential & Commercial Tile Services in Essex County, NJ",
        "description":
          "Professional residential and commercial tile services in Essex County, NJ, including tile installation, repair, replacement, remodeling, flooring, bathrooms, kitchens, showers, and backsplashes.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "url": "https://www.tilesandstonesnj.com/",
          "name": "Tiles & Stones NJ",
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj#service",
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj#service",
        "name": "Residential & Commercial Tile Services in Essex County, NJ",
        "url": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj",
        "description":
          "Tile installation, repair, replacement, and remodeling services for residential and commercial properties throughout Essex County, New Jersey.",
        "serviceType": [
          "Residential Tile Services",
          "Commercial Tile Services",
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
          "Ceramic Tile Installation",
          "Porcelain Tile Installation",
          "Large Format Tile Installation",
          "Custom Tile Installation",
          "Grout Repair",
        ],
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
            "addressCountry": "US",
          },
        },
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Residential Property Owners",
          },
          {
            "@type": "Audience",
            "audienceType": "Commercial Property Owners",
          },
        ],
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Essex County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj#breadcrumb",
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
            "name": "Residential & Commercial Tile Services in Essex County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/tiles/essex-county-nj",
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