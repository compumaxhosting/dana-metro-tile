import type { Metadata } from "next";

export const metadata: Metadata = {
  // 'absolute' bypasses the root template to use this exact string
  title: {
    absolute: "Tile, Stone & Masonry Contractors in Wayne, NJ | Installation, Repair & Remodeling",
  },
  description:
    "Trusted tile, stone and masonry contractors in Wayne, NJ offering expert installation, repair and remodeling for residential and commercial projects.",
  keywords: [
    "tile contractors Wayne NJ",
    "stone contractors Wayne NJ",
    "masonry contractors Wayne NJ",
    "tile installation Wayne NJ",
    "stone installation Wayne NJ",
    "masonry installation Wayne NJ",
    "tile repair Wayne NJ",
    "stone repair Wayne NJ",
    "masonry repair Wayne NJ",
    "tile remodeling Wayne NJ",
    "stone remodeling Wayne NJ",
    "masonry remodeling Wayne NJ",
    "tile contractors New Jersey",
    "stone contractors New Jersey",
    "masonry contractors New Jersey",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | Installation, Repair & Remodeling",
    description:
      "Trusted tile, stone and masonry contractors in Wayne, NJ offering expert installation, repair and remodeling for residential and commercial projects.",
    url: "/services",
    images: [
      {
        url: "/images/hero-tiles.webp",
        width: 1200,
        height: 630,
        alt: "Tile, stone and masonry installation and remodeling in Wayne, NJ",
      },
    ],
  },
  twitter: {
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | Installation, Repair & Remodeling",
    description:
      "Expert tile, stone and masonry contractors in Wayne, NJ for professional installation, repair and remodeling services.",
    images: ["/images/hero-tiles.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.tilesandstonesnj.com/services#webpage",
      url: "https://www.tilesandstonesnj.com/services",
      name: "Tile, Stone & Masonry Contractors in Wayne, NJ | Installation, Repair & Remodeling",
      description:
        "Professional tile, stone and masonry services in Wayne, NJ, including ceramic, porcelain and large-format tile, natural stone surfaces, fireplaces, walls and custom masonry.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      mainEntity: {
        "@id": "https://www.tilesandstonesnj.com/services#services",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/services#breadcrumb",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tilesandstonesnj.com/services#services",
      name: "Tile, Stone & Masonry Services",
      description:
        "Specialized tile, stone and masonry craftsmanship provided by Metro Tile & Stone across New Jersey.",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tile Services",
          item: {
            "@id": "https://www.tilesandstonesnj.com/services#tile-services",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Stone Services",
          item: {
            "@id": "https://www.tilesandstonesnj.com/services#stone-services",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Masonry Services",
          item: {
            "@id": "https://www.tilesandstonesnj.com/services#masonry-services",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/services#tile-services",
      name: "Tile Installation Services",
      serviceType: "Tile Installation",
      description:
        "Ceramic, porcelain and large-format tile installations for kitchens, bathrooms, floors, walls and feature walls, including precise finishing and grout work.",
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      category: "Tile Installation",
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/services#stone-services",
      name: "Stone Installation & Fabrication Services",
      serviceType: "Stone Installation",
      description:
        "Stone services featuring marble, travertine, onyx, quartzite and stone slabs for feature walls, fireplaces, countertops, vanities and book-matched surfaces.",
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      category: "Stone Installation",
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/services#masonry-services",
      name: "Custom Masonry Services",
      serviceType: "Masonry",
      description:
        "Custom masonry work, architectural detailing, fireplaces, walls and interior or outdoor masonry builds with site-specific craftsmanship.",
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      category: "Custom Masonry",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      name: "Dan Kush Metro Group Construction",
      alternateName: "Metro Tile & Stone",
      url: "https://www.tilesandstonesnj.com/",
      telephone: "+1-551-206-7097",
      email: "info@metrotilesandstones.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wayne",
        addressRegion: "NJ",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      serviceType: ["Tile Installation", "Stone Installation", "Masonry"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tilesandstonesnj.com/#website",
      url: "https://www.tilesandstonesnj.com/",
      name: "Metro Tile & Stone",
      publisher: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/services#breadcrumb",
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
          name: "Services",
          item: "https://www.tilesandstonesnj.com/services",
        },
      ],
    },
  ],
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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