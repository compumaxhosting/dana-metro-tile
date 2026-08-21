import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
  },
  description:
    "Meet Metro Tile & Stone, a New Jersey studio delivering precision tile, stone and masonry craftsmanship for discerning homeowners, designers and architects.",
  keywords: [
    "Metro Tile & Stone",
    "tile contractor New Jersey",
    "stone contractor NJ",
    "masonry contractor NJ",
    "luxury stone installation NJ",
    "tile installation New Jersey",
    "custom stone fabrication NJ",
    "Wayne NJ tile contractor",
    "Wayne NJ stone contractor",
  ],
  alternates: {
    // This will automatically combine with the metadataBase from your root layout
    canonical: "/about",
  },
  openGraph: {
    title: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
    description:
      "Discover Metro Tile & Stone's precision craftsmanship and two decades of experience delivering exceptional tile, stone and masonry work across New Jersey.",
    url: "/about",
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
      name: "Tile & Stone Contractors in NJ | Installation, Repair & Remodeling",
      description:
        "Learn about Metro Tile & Stone, a New Jersey craftsmanship studio specializing in premium tile, stone and masonry work with precision installation and enduring care.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business", // Matched to your root layout's business ID
      },
      mainEntity: {
        "@id": "https://www.tilesandstonesnj.com/about#person",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/about#breadcrumb",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.tilesandstonesnj.com/about#person",
      name: "Dan Kush",
      jobTitle: "Founder",
      worksFor: {
        "@id": "https://www.tilesandstonesnj.com/#business", // Matched to your root layout's business ID
      },
      description:
        "Dan Kush is the founder of Metro Tile & Stone. He began cutting stone as an apprentice and has more than two decades of experience working across residences, restaurants and private galleries.",
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