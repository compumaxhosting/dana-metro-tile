import type { Metadata } from "next";

export const metadata: Metadata = {
  // 'absolute' bypasses the root template to use this exact title
  title: {
    absolute: "Residential & Commercial Tile Contractors in Wayne, NJ",
  },
  description:
    "Explore residential and commercial tile projects by experienced contractors in Wayne, NJ, featuring detailed tile, stone and masonry craftsmanship.",
  keywords: [
    "residential tile contractors Wayne NJ",
    "commercial tile contractors Wayne NJ",
    "tile contractors Wayne NJ",
    "tile installation Wayne NJ",
    "residential tile installation NJ",
    "commercial tile installation NJ",
    "stone tile Wayne NJ",
    "masonry tile work Wayne NJ",
    "tile projects Wayne NJ",
    "tile contractor New Jersey",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Residential & Commercial Tile Contractors in Wayne, NJ",
    description:
      "Explore residential and commercial tile projects by experienced contractors in Wayne, NJ, featuring detailed tile, stone and masonry craftsmanship.",
    url: "/gallery",
    images: [
      {
        url: "/images/b5.webp",
        width: 1200,
        height: 630,
        alt: "Residential and commercial tile projects by Metro Tile & Stone in Wayne, NJ",
      },
    ],
  },
  twitter: {
    title: "Residential & Commercial Tile Contractors in Wayne, NJ",
    description:
      "View residential and commercial tile projects by Metro Tile & Stone, serving Wayne, NJ with professional tile and stone craftsmanship.",
    images: ["/images/b5.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.tilesandstonesnj.com/gallery#webpage",
      url: "https://www.tilesandstonesnj.com/gallery",
      name: "Residential & Commercial Tile Contractors in Wayne, NJ",
      description:
        "A gallery showcasing residential and commercial tile, stone and masonry craftsmanship by Metro Tile & Stone in Wayne, New Jersey.",
      isPartOf: {
        "@id": "https://www.tilesandstonesnj.com/#website",
      },
      about: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      mainEntity: {
        "@id": "https://www.tilesandstonesnj.com/gallery#portfolio",
      },
      breadcrumb: {
        "@id": "https://www.tilesandstonesnj.com/gallery#breadcrumb",
      },
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.tilesandstonesnj.com/gallery#portfolio",
      name: "Residential & Commercial Tile, Stone & Masonry Projects",
      description:
        "Project gallery featuring tile, stone and masonry work completed for residential and commercial spaces in New Jersey.",
      url: "https://www.tilesandstonesnj.com/gallery",
      creator: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
      provider: {
        "@id": "https://www.tilesandstonesnj.com/#business",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/gallery#breadcrumb",
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
          name: "Gallery",
          item: "https://www.tilesandstonesnj.com/gallery",
        },
      ],
    },
  ],
};

export default function GalleryLayout({
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