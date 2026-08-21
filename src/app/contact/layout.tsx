import type { Metadata } from "next";

export const metadata: Metadata = {
  // 'absolute' bypasses the root layout template to use this exact title
  title: {
    absolute: "Tile, Stone & Masonry Contractors in Wayne, NJ | (551) 206-7097",
  },
  description:
    "Contact Metro Tile & Stone in Wayne, NJ for tile, stone and masonry projects. Call (551) 206-7097 or request a consultation online.",
  keywords: [
    "contact tile contractor Wayne NJ",
    "tile contractor Wayne NJ",
    "stone contractor Wayne NJ",
    "masonry contractor Wayne NJ",
    "tile stone masonry NJ",
    "tile installation NJ",
    "stone installation NJ",
    "masonry services NJ",
    "Metro Tile & Stone contact",
    "tile contractor phone Wayne NJ",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | (551) 206-7097",
    description:
      "Contact Metro Tile & Stone in Wayne, NJ for tile, stone and masonry projects. Call (551) 206-7097 or request a consultation online.",
    url: "/contact",
    images: [
      {
        url: "/images/f1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Metro Tile & Stone for tile, stone and masonry services in Wayne, NJ",
      },
    ],
  },
  twitter: {
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ | (551) 206-7097",
    description:
      "Contact Metro Tile & Stone in Wayne, NJ for tile, stone and masonry projects. Call (551) 206-7097 or request a consultation.",
    images: ["/images/f1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.tilesandstonesnj.com/contact#contactpage",
      url: "https://www.tilesandstonesnj.com/contact",
      name: "Contact Tile, Stone & Masonry Contractors in Wayne, NJ | (551) 206-7097",
      description:
        "Contact Metro Tile & Stone in Wayne, NJ for tile, stone and masonry services, project inquiries and consultations.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      mainEntity: {
        "@id": "https://www.tilesandstonesnj.com/contact#contactpoint",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/contact#breadcrumb",
      },
    },
    {
      "@type": "ContactPoint",
      "@id": "https://www.tilesandstonesnj.com/contact#contactpoint",
      contactType: "customer service",
      telephone: "+1-551-206-7097",
      email: "info@metrotilesandstones.com",
      availableLanguage: ["English"],
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
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