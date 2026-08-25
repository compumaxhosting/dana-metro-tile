import type { Metadata } from "next";

export const metadata: Metadata = {
  // 'absolute' bypasses the root layout template to use this exact title
  title: {
    absolute:
      "Contact Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | (551) 206-7097",
  },
  description:
    "Contact Metro Tile & Stone for tile, stone and masonry services in Wayne, Passaic, Bergen, Morris and Essex Counties, NJ. Call (551) 206-7097 or request a consultation online.",
  keywords: [
    "contact tile contractor Wayne NJ",
    "contact tile contractor Passaic County NJ",
    "contact tile contractor Bergen County NJ",
    "contact tile contractor Morris County NJ",
    "contact tile contractor Essex County NJ",
    "tile contractor Wayne NJ",
    "stone contractor Wayne NJ",
    "masonry contractor Wayne NJ",
    "tile contractors Passaic County NJ",
    "stone contractors Passaic County NJ",
    "masonry contractors Passaic County NJ",
    "tile contractors Bergen County NJ",
    "stone contractors Bergen County NJ",
    "masonry contractors Bergen County NJ",
    "tile contractors Morris County NJ",
    "stone contractors Morris County NJ",
    "masonry contractors Morris County NJ",
    "tile contractors Essex County NJ",
    "stone contractors Essex County NJ",
    "masonry contractors Essex County NJ",
    "tile installation NJ",
    "stone installation NJ",
    "masonry services NJ",
    "Metro Tile & Stone contact",
    "tile contractor phone Wayne NJ",
    "tile stone masonry contractors Northern NJ",
  ],
  authors: [{ name: "Metro Tile & Stone" }],
  other: {
    "service-area":
      "Wayne, NJ, Passaic County, NJ, Bergen County, NJ, Morris County, NJ, Essex County, NJ",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Contact Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | (551) 206-7097",
    description:
      "Contact Metro Tile & Stone for professional tile, stone and masonry services throughout Wayne, Passaic, Bergen, Morris and Essex Counties, NJ. Call (551) 206-7097 or request a consultation online.",
    url: "/contact",
    siteName: "Metro Tile & Stone",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/b2.webp",
        width: 1200,
        height: 630,
        alt: "Contact Metro Tile & Stone for tile, stone and masonry services in Wayne and Northern New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | (551) 206-7097",
    description:
      "Contact Metro Tile & Stone for tile, stone and masonry services in Wayne, Passaic, Bergen, Morris and Essex Counties, NJ. Call (551) 206-7097 or request a consultation.",
    images: ["https://www.tilesandstonesnj.com/images/b2.webp"],
  },
  referrer: "strict-origin-when-cross-origin",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.tilesandstonesnj.com/contact#contactpage",
      url: "https://www.tilesandstonesnj.com/contact",
      name: "Contact Metro Tile & Stone | Tile, Stone & Masonry Contractors in Wayne, NJ",
      description:
        "Contact Metro Tile & Stone for tile, stone and masonry services in Wayne, Passaic, Bergen, Morris and Essex Counties, NJ. Call (551) 206-7097 or request a consultation online.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      mainEntity: {
        "@id": "https://www.tilesandstonesnj.com/contact#contact",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/contact#breadcrumb",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      name: "Metro Tile & Stone",
      url: "https://www.tilesandstonesnj.com/",
      telephone: "+1-551-206-7097",
      description:
        "Metro Tile & Stone provides professional tile, stone and masonry services for residential and commercial projects throughout Northern New Jersey.",
      areaServed: [
        {
          "@type": "City",
          name: "Wayne",
          containedInPlace: {
            "@type": "State",
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
        "Stone Remodeling",
        "Masonry Installation",
        "Masonry Repair",
        "Masonry Remodeling",
      ],
    },
    {
      "@type": "ContactPoint",
      "@id": "https://www.tilesandstonesnj.com/contact#contact",
      contactType: "customer service",
      telephone: "+1-551-206-7097",
      url: "https://www.tilesandstonesnj.com/contact",
      areaServed: [
        "Wayne, NJ",
        "Passaic County, NJ",
        "Bergen County, NJ",
        "Morris County, NJ",
        "Essex County, NJ",
      ],
      availableLanguage: ["English"],
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/contact#service",
      name: "Tile, Stone & Masonry Services",
      serviceType: [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Stone Remodeling",
        "Masonry Installation",
        "Masonry Repair",
        "Masonry Remodeling",
      ],
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Wayne",
          containedInPlace: {
            "@type": "State",
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/contact#breadcrumb",
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
          name: "Contact",
          item: "https://www.tilesandstonesnj.com/contact",
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

export default function ContactLayout({
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