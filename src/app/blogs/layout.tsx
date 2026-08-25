import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Tile, Stone & Masonry Blog | Wayne, Passaic, Bergen, Morris & Essex County NJ",
  },
  description:
    "Explore tile, stone and masonry tips, trends and project guidance from Metro Tile & Stone serving Wayne, Passaic, Bergen, Morris and Essex County, NJ.",
  keywords: [
    "tile and stone blog Wayne NJ",
    "tile and stone blog Passaic County NJ",
    "tile and stone blog Bergen County NJ",
    "tile and stone blog Morris County NJ",
    "tile and stone blog Essex County NJ",
    "tile contractors Wayne NJ",
    "tile contractors Passaic County NJ",
    "tile contractors Bergen County NJ",
    "tile contractors Morris County NJ",
    "tile contractors Essex County NJ",
    "stone contractors Wayne NJ",
    "stone contractors Passaic County NJ",
    "stone contractors Bergen County NJ",
    "stone contractors Morris County NJ",
    "stone contractors Essex County NJ",
    "masonry contractors Wayne NJ",
    "masonry contractors Passaic County NJ",
    "masonry contractors Bergen County NJ",
    "masonry contractors Morris County NJ",
    "masonry contractors Essex County NJ",
    "tile installation NJ",
    "stone installation NJ",
    "masonry services NJ",
    "tile remodeling NJ",
    "stone remodeling NJ",
    "Metro Tile & Stone blog"
  ],
  authors: [{ name: "Metro Tile & Stone" }],
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    title: "Tile, Stone & Masonry Blog | Wayne, Passaic, Bergen, Morris & Essex County NJ",
    description: "Discover expert tile, stone and masonry insights, trends and project guidance from Metro Tile & Stone across Wayne, Passaic, Bergen, Morris and Essex County, NJ.",
    url: "https://www.tilesandstonesnj.com/blogs",
    siteName: "Metro Tile & Stone",
    images: [
      {
        url: "/images/e1.webp",
        width: 1200,
        height: 630,
        alt: "Tile, stone and masonry insights from Metro Tile & Stone serving Wayne, Passaic, Bergen, Morris and Essex County, NJ",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile, Stone & Masonry Blog | Wayne, Passaic, Bergen, Morris & Essex County NJ",
    description: "Explore expert tile, stone and masonry tips, trends and project guidance from Metro Tile & Stone serving Wayne, Passaic, Bergen, Morris and Essex County, NJ.",
    images: ["/images/e1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.tilesandstonesnj.com/blogs#collectionpage",
      "url": "https://www.tilesandstonesnj.com/blogs",
      "name": "Tile, Stone & Masonry Blog | Wayne, Passaic, Bergen, Morris & Essex County NJ",
      "description": "Explore tile, stone and masonry tips, trends and project guidance from Metro Tile & Stone serving Wayne, Passaic, Bergen, Morris and Essex County, NJ.",
      "isPartOf": {
        "@id": "https://www.tilesandstonesnj.com/#website"
      },
      "about": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "publisher": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "breadcrumb": {
        "@id": "https://www.tilesandstonesnj.com/blogs#breadcrumb"
      }
    },
    {
      "@type": "Blog",
      "@id": "https://www.tilesandstonesnj.com/blogs#blog",
      "url": "https://www.tilesandstonesnj.com/blogs",
      "name": "Metro Tile & Stone Blog",
      "description": "Expert insights, ideas and guidance about tile, stone and masonry installation, repair and remodeling throughout Northern New Jersey.",
      "publisher": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "inLanguage": "en-US",
      "about": [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Stone Remodeling",
        "Masonry Installation",
        "Masonry Repair",
        "Masonry Remodeling"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      "name": "Metro Tile & Stone",
      "url": "https://www.tilesandstonesnj.com/",
      "description": "Metro Tile & Stone provides professional tile, stone and masonry services for residential and commercial projects throughout Northern New Jersey.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Wayne",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bergen County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Essex County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        }
      ],
      "knowsAbout": [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Stone Remodeling",
        "Masonry Installation",
        "Masonry Repair",
        "Masonry Remodeling"
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.tilesandstonesnj.com/blogs#topics",
      "name": "Metro Tile & Stone Blog Topics",
      "description": "Tile, stone and masonry topics for homeowners, designers and property owners in Northern New Jersey.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Tile Installation"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tile Repair & Remodeling"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Stone Installation"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Stone Repair & Remodeling"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Masonry Installation & Repair"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Tile & Stone Design Trends"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/blogs#service-area",
      "name": "Tile, Stone & Masonry Services",
      "provider": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "areaServed": [
        "Wayne, NJ",
        "Passaic County, NJ",
        "Bergen County, NJ",
        "Morris County, NJ",
        "Essex County, NJ"
      ],
      "serviceType": [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Stone Remodeling",
        "Masonry Services"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/blogs#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tilesandstonesnj.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://www.tilesandstonesnj.com/blogs"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tilesandstonesnj.com/#website",
      "url": "https://www.tilesandstonesnj.com/",
      "name": "Metro Tile & Stone",
      "publisher": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        {/* Custom Service Area Tag */}
        <meta
          name="service-area"
          content="Wayne, NJ, Passaic County, NJ, Bergen County, NJ, Morris County, NJ, Essex County, NJ"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {children}
    </>
  );
}