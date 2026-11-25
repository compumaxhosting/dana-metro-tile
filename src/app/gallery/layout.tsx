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
    url: "https://www.metrogroupconstruction.com/gallery",
    images: [
      {
        url: "https://www.metrogroupconstruction.com/images/b5.webp",
        width: 1200,
        height: 630,
        alt: "Residential and commercial tile projects by Metro Group Construction Tiles & Stones NJ in Wayne, NJ",
      },
    ],
  },
  twitter: {
    title: "Residential & Commercial Tile Contractors in Wayne, NJ",
    description:
      "View residential and commercial tile projects by Metro Group Construction Tiles & Stones NJ, serving Wayne, NJ with professional tile and stone craftsmanship.",
    images: ["https://www.metrogroupconstruction.com/images/b5.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.metrogroupconstruction.com/gallery#webpage",
      url: "https://www.metrogroupconstruction.com/gallery",
      name: "Residential & Commercial Tile Contractors in Wayne, NJ",
      description:
        "A gallery showcasing residential and commercial tile, stone and masonry craftsmanship by Metro Group Construction Tiles & Stones NJ in Wayne, New Jersey.",
      isPartOf: {
        "@id": "https://www.metrogroupconstruction.com/#website",
      },
      about: {
        "@id": "https://www.metrogroupconstruction.com/#business",
      },
      mainEntity: {
        "@id": "https://www.metrogroupconstruction.com/gallery#portfolio",
      },
      breadcrumb: {
        "@id": "https://www.metrogroupconstruction.com/gallery#breadcrumb",
      },
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.metrogroupconstruction.com/gallery#portfolio",
      name: "Residential & Commercial Tile, Stone & Masonry Projects",
      description:
        "Project gallery featuring tile, stone and masonry work completed for residential and commercial spaces in New Jersey.",
      url: "https://www.metrogroupconstruction.com/gallery",
      creator: {
        "@id": "https://www.metrogroupconstruction.com/#business",
      },
      provider: {
        "@id": "https://www.metrogroupconstruction.com/#business",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.metrogroupconstruction.com/gallery#breadcrumb",
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
          name: "Gallery",
          item: "https://www.metrogroupconstruction.com/gallery",
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