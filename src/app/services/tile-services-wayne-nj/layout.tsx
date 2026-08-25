import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Tile Services in Wayne, NJ | Install, Repair & Remodel",
  description:
    "Residential & commercial tile services in Wayne, NJ for installation, repair, remodeling, and floor services across Passaic, Bergen, Morris & Essex Counties.",
  keywords: [
    "tile services Wayne NJ",
    "tile installation Wayne NJ",
    "tile repair Wayne NJ",
    "tile remodeling Wayne NJ",
    "floor installation Wayne NJ",
    "floor tile repair Wayne NJ",
    "residential tile services Wayne NJ",
    "commercial tile services Wayne NJ",
    "ceramic tile installation",
    "porcelain tile installation",
    "large-format tile installation",
    "tile contractor Wayne NJ",
    "tile services Passaic County",
    "tile services Bergen County",
    "tile services Morris County",
    "tile services Essex County",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/tile-services-wayne-nj/",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Tile Services in Wayne, NJ | Install, Repair & Remodel",
    description:
      "Residential & commercial tile services in Wayne, NJ for installation, repair, remodeling, and floor services across four North Jersey counties.",
    url: "https://www.tilesandstonesnj.com/services/tile-services-wayne-nj/",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "/images/hero-tiles.webp",
        alt: "Residential and commercial tile services in Wayne, NJ by Tiles & Stones NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Services in Wayne, NJ | Install, Repair & Remodel",
    description:
      "Tile installation, repair, remodeling, and floor services for residential and commercial projects in Wayne, NJ and surrounding North Jersey counties.",
    images: ["/images/hero-tiles.webp"],
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
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/tile-services-wayne-nj/#webpage",
        url: "https://www.tilesandstonesnj.com/tile-services-wayne-nj/",
        name: "Tile Services in Wayne, NJ | Install, Repair & Remodel",
        description:
          "Residential and commercial tile services in Wayne, NJ for installation, repair, remodeling, and floor services across Passaic, Bergen, Morris, and Essex Counties.",
        isPartOf: {
          "@id": "https://www.tilesandstonesnj.com/#website",
        },
        about: {
          "@id": "https://www.tilesandstonesnj.com/tile-services-wayne-nj/#service",
        },
        breadcrumb: {
          "@id": "https://www.tilesandstonesnj.com/tile-services-wayne-nj/#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tilesandstonesnj.com/#website",
        url: "https://www.tilesandstonesnj.com/",
        name: "Tiles & Stones NJ",
        publisher: {
          "@id": "https://www.tilesandstonesnj.com/#business",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        name: "Tiles & Stones NJ",
        url: "https://www.tilesandstonesnj.com/",
        description:
          "Tiles & Stones NJ provides residential and commercial tile installation, repair, remodeling, and floor services in Wayne, NJ and surrounding areas.",
        image: "/images/hero-tile.webp",
        logo: "/logoo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "YOUR ACTUAL STREET ADDRESS",
          addressLocality: "Wayne",
          addressRegion: "NJ",
          postalCode: "YOUR ZIP CODE",
          addressCountry: "US",
        },
        telephone: "YOUR ACTUAL PHONE NUMBER",
        areaServed: [
          {
            "@type": "City",
            name: "Wayne",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Passaic County",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Passaic County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Bergen County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Morris County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Essex County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/tile-services-wayne-nj/#service",
        name: "Tile Services in Wayne, NJ",
        serviceType: [
          "Tile Installation",
          "Tile Repair",
          "Tile Remodeling",
          "Floor Installation",
          "Floor Tile Repair",
          "Wall Tile Installation",
          "Wall Tile Repair",
          "Kitchen Tile Installation",
          "Bathroom Tile Installation",
          "Large-Format Tile Installation",
          "Grout Repair and Finishing",
        ],
        description:
          "Residential and commercial tile installation, repair, remodeling, and floor services in Wayne, NJ and surrounding Passaic, Bergen, Morris, and Essex Counties.",
        provider: {
          "@id": "https://www.tilesandstonesnj.com/#business",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Wayne",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Passaic County",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Passaic County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Bergen County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Morris County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Essex County",
            containedInPlace: {
              "@type": "State",
              name: "New Jersey",
            },
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Residential and Commercial Customers",
        },
        url: "https://www.tilesandstonesnj.com/tile-services-wayne-nj/",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/tile-services-wayne-nj/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.tilesandstonesnj.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tile Services",
            item: "https://www.tilesandstonesnj.com/tile-services-wayne-nj/",
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