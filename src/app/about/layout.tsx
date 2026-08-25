import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
  },
  description:
    "Meet Metro Tile & Stone, a New Jersey studio delivering precision tile, stone and masonry craftsmanship for discerning homeowners, designers and architects in Wayne, NJ, Passaic County, Bergen County, Morris County and Essex County.",
  keywords: [
    "Tile and stone services in Wayne, NJ",
    "Tile and stone services in Passaic County, NJ",
    "Tile and stone services in Bergen County, NJ",
    "Tile and stone services in Morris County, NJ",
    "Tile and stone services in Essex County, NJ",
    "Tile contractors near Wayne, NJ",
    "Tile contractors in Passaic County, NJ",
    "Tile contractors in Bergen County, NJ",
    "Tile contractors in Morris County, NJ",
    "Tile contractors in Essex County, NJ",
    "Stone and masonry contractors in Wayne, NJ",
    "Stone and masonry contractors in Passaic County, NJ",
    "Stone and masonry contractors in Bergen County, NJ",
    "Stone and masonry contractors in Morris County, NJ",
    "Stone and masonry contractors in Essex County, NJ",
  ],
  authors: [{ name: "Metro Tile & Stone" }],
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#ffffff",
  },
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
    description:
      "Discover Metro Tile & Stone's precision craftsmanship and two decades of experience delivering exceptional tile, stone and masonry work across New Jersey.",
    url: "https://www.tilesandstonesnj.com/about",
    siteName: "Metro Tile & Stone",
    images: [
      {
        url: "/images/a1.webp",
        width: 1200,
        height: 630,
        alt: "Luxury custom stone craftsmanship by Metro Tile & Stone in New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
    description:
      "Learn about Metro Tile & Stone and our precision approach to luxury tile, stone and masonry craftsmanship across New Jersey.",
    images: ["/images/a1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.tilesandstonesnj.com/about#aboutpage",
      url: "https://www.tilesandstonesnj.com/about",
      name: "About Metro Tile & Stone | NJ Tile, Stone & Masonry Experts",
      description:
        "Learn about Metro Tile & Stone, a New Jersey tile, stone and masonry studio serving homeowners, designers and architects in Wayne, Passaic, Bergen, Morris and Essex County.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/about#breadcrumb",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      name: "Metro Tile & Stone",
      url: "https://www.tilesandstonesnj.com/",
      description:
        "Metro Tile & Stone provides precision tile, stone and masonry craftsmanship for homeowners, designers and architects throughout Northern New Jersey.",
      areaServed: [
        {
          "@type": "City",
          name: "Wayne",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "New Jersey",
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
      knowsAbout: [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Masonry",
        "Custom Tile Work",
        "Custom Stone Work",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/about#tile-stone-masonry",
      name: "Tile, Stone & Masonry Services",
      serviceType: [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Masonry Services",
      ],
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      areaServed: [
        "Wayne, NJ",
        "Passaic County, NJ",
        "Bergen County, NJ",
        "Morris County, NJ",
        "Essex County, NJ",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/about#breadcrumb",
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
          name: "About",
          item: "https://www.tilesandstonesnj.com/about",
        },
      ],
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
  ],
};

export default function AboutLayout({
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