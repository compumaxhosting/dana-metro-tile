import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Tile, Stone & Masonry Contractors NJ | Metro Group Construction",
  },
  description:
    "Discover Metro Group Construction, providing tile, marble, porcelain, natural stone, custom stonework, and masonry services in Passaic, Bergen, Morris, and Essex Counties, NJ.",
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
  authors: [{ name: "Metro Group Construction Tiles & Stones NJ" }],
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
      "Discover Metro Group Construction Tiles & Stones NJ's precision craftsmanship and two decades of experience delivering exceptional tile, stone and masonry work across New Jersey.",
    url: "https://www.metrogroupconstruction.com/about",
    siteName: "Metro Group Construction Tiles & Stones NJ",
    images: [
      {
        url: "https://www.metrogroupconstruction.com/images/a1.webp",
        width: 1200,
        height: 630,
        alt: "Luxury custom stone craftsmanship by Metro Group Construction Tiles & Stones NJ in New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
    description:
      "Learn about Metro Group Construction Tiles & Stones NJ and our precision approach to luxury tile, stone and masonry craftsmanship across New Jersey.",
    images: ["https://www.metrogroupconstruction.com/images/a1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.metrogroupconstruction.com/about#aboutpage",
      url: "https://www.metrogroupconstruction.com/about",
      name: "About Metro Group Construction Tiles & Stones NJ | NJ Tile, Stone & Masonry Experts",
      description:
        "Learn about Metro Group Construction Tiles & Stones NJ, a New Jersey tile, stone and masonry studio serving homeowners, designers and architects in Wayne, Passaic, Bergen, Morris and Essex County.",
      isPartOf: {
        "@id": "https://www.metrogroupconstruction.com/#website",
      },
      about: {
        "@id": "https://www.metrogroupconstruction.com/#business",
      },
      breadcrumb: {
        "@id": "https://www.metrogroupconstruction.com/about#breadcrumb",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.metrogroupconstruction.com/#business",
      name: "Metro Group Construction Tiles & Stones NJ",
      url: "https://www.metrogroupconstruction.com/",
      description:
        "Metro Group Construction Tiles & Stones NJ provides precision tile, stone and masonry craftsmanship for homeowners, designers and architects throughout Northern New Jersey.",
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
      "@id": "https://www.metrogroupconstruction.com/about#tile-stone-masonry",
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
        "@id": "https://www.metrogroupconstruction.com/#business",
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
      "@id": "https://www.metrogroupconstruction.com/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.metrogroupconstruction.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.metrogroupconstruction.com/about",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.metrogroupconstruction.com/#website",
      url: "https://www.metrogroupconstruction.com/",
      name: "Metro Group Construction Tiles & Stones NJ",
      publisher: {
        "@id": "https://www.metrogroupconstruction.com/#business",
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