import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Affordable Masonry Services in Morris County, NJ | Expert",
  description:
    "Affordable masonry services in Morris County, NJ for brick repair, stonework, repointing, restoration, chimney and exterior masonry projects.",
  keywords: [
    "masonry services Morris County NJ",
    "masonry contractor Morris County NJ",
    "masonry repair Morris County",
    "affordable masonry contractor NJ",
    "brick repair Morris County",
    "stone masonry Morris County",
    "masonry restoration Morris County",
    "brick pointing Morris County",
    "chimney masonry repair Morris County",
  ],
  authors: [{ name: "Tiles & Stones" }],
  alternates: {
    canonical: "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Affordable Masonry Services in Morris County, NJ | Expert",
    description:
      "Affordable masonry services in Morris County, NJ for brick repair, stonework, repointing, restoration, chimney and exterior masonry projects.",
    url: "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj",
    siteName: "Tiles & Stones",
    images: [
      {
        url: "https://www.metrogroupconstruction.com/images/a1.webp",
        alt: "Masonry services in Morris County, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Masonry Services in Morris County, NJ | Expert",
    description:
      "Affordable masonry services in Morris County, NJ for brick repair, stonework, repointing, restoration, chimney and exterior masonry projects.",
    images: [
      "https://www.metrogroupconstruction.com/images/a1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function MasonryServicesMorrisCountyNjLayout({
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
        "@id": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj#service",
        "name": "Masonry Services in Morris County, NJ",
        "serviceType": "Masonry Services",
        "description": "Masonry services in Morris County, New Jersey, including brick repair, stonework, mortar repointing, masonry restoration, chimney masonry, facade repairs, and exterior masonry work.",
        "url": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "provider": {
          "@id": "https://www.metrogroupconstruction.com/#business"
        },
        "category": "Masonry Contractor"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.metrogroupconstruction.com/#business",
        "name": "Tiles & Stones",
        "url": "https://www.metrogroupconstruction.com/",
        "description": "Masonry and related construction services serving properties in New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "knowsAbout": [
          "Masonry repair",
          "Brick repair",
          "Stone masonry",
          "Masonry repointing",
          "Masonry restoration",
          "Chimney masonry",
          "Exterior masonry",
          "Historic masonry"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj#webpage",
        "url": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj",
        "name": "Affordable Masonry Services in Morris County, NJ | Expert Masonry Contractor",
        "description": "Affordable masonry services in Morris County, NJ for brick repair, stonework, repointing, restoration, chimney and exterior masonry projects.",
        "isPartOf": {
          "@id": "https://www.metrogroupconstruction.com/#website"
        },
        "about": {
          "@id": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.metrogroupconstruction.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.metrogroupconstruction.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Masonry",
            "item": "https://www.metrogroupconstruction.com/services/masonry/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Morris County Masonry Services",
            "item": "https://www.metrogroupconstruction.com/services/masonry/morris-county-nj"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.metrogroupconstruction.com/#website",
        "url": "https://www.metrogroupconstruction.com/",
        "name": "Tiles & Stones",
        "publisher": {
          "@id": "https://www.metrogroupconstruction.com/#business"
        },
        "inLanguage": "en-US"
      }
    ]
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