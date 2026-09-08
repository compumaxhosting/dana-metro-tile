import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Complete Tile Installation & Remodeling Services in Morris County, NJ",
  description:
    "Complete tile installation and remodeling services in Morris County, NJ for bathrooms, kitchens, floors, showers, backsplashes, and custom tile projects.",
  keywords: [
    "tile installation Morris County NJ",
    "tile remodeling Morris County NJ",
    "tile contractors Morris County NJ",
    "tile services Morris County NJ",
    "tile repair Morris County NJ",
    "bathroom tile installation Morris County NJ",
    "kitchen tile installation Morris County NJ",
    "shower tile installation Morris County NJ",
    "floor tile installation Morris County NJ",
    "backsplash tile installation Morris County NJ",
    "ceramic tile installation Morris County NJ",
    "porcelain tile installation Morris County NJ",
    "large format tile Morris County NJ",
    "wall tile installation Morris County NJ",
    "grout repair Morris County NJ",
    "tile replacement Morris County NJ",
    "residential tile contractors Morris County NJ",
    "commercial tile contractors Morris County NJ",
    "custom tile installation Morris County NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Complete Tile Installation & Remodeling Services in Morris County, NJ",
    description:
      "Complete tile installation and remodeling services in Morris County, NJ for bathrooms, kitchens, floors, showers, backsplashes, and custom tile projects.",
    url: "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/images/f2.webp",
        alt: "Professional tile installation and remodeling services in Morris County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Tile Installation & Remodeling Services in Morris County, NJ",
    description:
      "Complete tile installation and remodeling services in Morris County, NJ for bathrooms, kitchens, floors, showers, backsplashes, and custom tile projects.",
    images: [
      "/images/f2.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function TileServicesMorrisCountyNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj",
        "name": "Complete Tile Installation & Remodeling Services in Morris County, NJ",
        "description":
          "Complete tile installation, repair, replacement, and remodeling services for residential and commercial properties throughout Morris County, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "url": "https://www.tilesandstonesnj.com/",
          "name": "Tiles & Stones NJ",
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj#service",
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj#service",
        "name": "Complete Tile Installation & Remodeling Services in Morris County, NJ",
        "url": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj",
        "description":
          "Professional tile installation, repair, replacement, and remodeling services for bathrooms, kitchens, showers, floors, walls, backsplashes, and custom tile projects throughout Morris County, New Jersey.",
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
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj#breadcrumb",
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
            "name": "Tile Services in Morris County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/tiles/morris-county-nj",
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