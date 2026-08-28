import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Tile Services in Wayne, NJ | Installation & Repair",
  description:
    "Professional tile services in Wayne, NJ for installation, repair, remodeling, flooring, backsplashes, bathrooms, showers, and large-format tile.",
  keywords: [
    "tile services Wayne NJ",
    "tile installation Wayne NJ",
    "tile repair Wayne NJ",
    "tile contractors Wayne NJ",
    "tile remodeling Wayne NJ",
    "floor tile installation Wayne NJ",
    "bathroom tile Wayne NJ",
    "shower tile Wayne NJ",
    "kitchen backsplash Wayne NJ",
    "ceramic tile installation Wayne NJ",
    "porcelain tile installation Wayne NJ",
    "large-format tile installation Wayne NJ",
    "wall tile installation Wayne NJ",
    "grout repair Wayne NJ",
    "tile replacement Wayne NJ",
    "residential tile services Wayne NJ",
    "commercial tile services Wayne NJ",
    "tile contractor near Wayne NJ",
    "Tile installation services near me in Wayne NJ",
    "Who provides tile installation in Wayne NJ",
    "Best tile contractor in Wayne NJ",
    "Where can I get bathroom tile installed in Wayne NJ",
    "Affordable tile repair services in Wayne NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Tile Services in Wayne, NJ | Installation & Repair",
    description:
      "Professional tile services in Wayne, NJ for installation, repair, remodeling, flooring, backsplashes, bathrooms, showers, and large-format tile.",
    url: "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/images/f1.webp",
        alt: "Professional tile installation and repair services in Wayne, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Services in Wayne, NJ | Installation & Repair",
    description:
      "Professional tile services in Wayne, NJ for installation, repair, remodeling, flooring, backsplashes, bathrooms, showers, and large-format tile.",
    images: ["/images/f1.webp"],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function TileServicesWayneNjLayout({
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
        "@id": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj#service",
        "name": "Tile and Floor Services in Wayne, NJ",
        "url": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj",
        "description":
          "Professional tile installation, repair, remodeling, and flooring services for residential and commercial projects in Wayne, NJ and surrounding North Jersey communities.",
        "serviceType": [
          "Tile Installation",
          "Tile Repair",
          "Tile Remodeling",
          "Floor Tile Installation",
          "Wall Tile Installation",
          "Bathroom and Shower Tile",
          "Kitchen Backsplash Installation",
          "Large-Format Tile Installation",
          "Grout Repair",
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Wayne",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Wayne",
              "addressRegion": "NJ",
              "addressCountry": "US",
            },
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey",
          },
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
          "areaServed": {
            "@type": "State",
            "name": "New Jersey",
          },
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj",
        "name": "Tile Services in Wayne, NJ | Install, Repair & Remodel",
        "description":
          "Tile installation, repair, remodeling, and floor services in Wayne, NJ for residential and commercial projects.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/",
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj#service",
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj#breadcrumb",
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
            "name": "Tile Services in Wayne, NJ",
            "item": "https://www.tilesandstonesnj.com/services/tiles/wayne-county-nj",
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