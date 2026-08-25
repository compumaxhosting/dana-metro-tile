import type { Metadata } from "next";

export const metadata: Metadata = {
  // 'absolute' bypasses the root template to use this exact string
  title: {
    absolute: "Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | Installation, Repair & Remodeling",
  },
  description:
    "Trusted tile, stone and masonry contractors serving Wayne, NJ, Passaic, Bergen, Morris and Essex Counties. Expert installation, repair and remodeling for residential and commercial projects.",
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
    "tile contractors New Jersey",
    "stone contractors New Jersey",
    "masonry contractors New Jersey"
  ],
  authors: [{ name: "Metro Tile & Stone" }],
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | Installation, Repair & Remodeling",
    description: "Trusted tile, stone and masonry contractors serving Wayne, Passaic, Bergen, Morris and Essex Counties in New Jersey. Expert installation, repair and remodeling for residential and commercial projects.",
    url: "https://www.tilesandstonesnj.com/services",
    siteName: "Metro Tile & Stone",
    images: [
      {
        url: "/images/hero-tiles.webp",
        width: 1200,
        height: 630,
        alt: "Tile, stone and masonry installation, repair and remodeling by Metro Tile & Stone in Northern New Jersey",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | Installation, Repair & Remodeling",
    description: "Expert tile, stone and masonry contractors serving Wayne, Passaic, Bergen, Morris and Essex Counties in New Jersey for professional installation, repair and remodeling services.",
    images: ["/images/hero-tiles.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tilesandstonesnj.com/services#webpage",
      "url": "https://www.tilesandstonesnj.com/services",
      "name": "Tile, Stone & Masonry Contractors in Wayne, NJ & Northern NJ | Installation, Repair & Remodeling",
      "description": "Trusted tile, stone and masonry contractors serving Wayne, NJ, Passaic, Bergen, Morris and Essex Counties. Expert installation, repair and remodeling for residential and commercial projects.",
      "isPartOf": {
        "@id": "https://www.tilesandstonesnj.com/#website"
      },
      "about": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "mainEntity": {
        "@id": "https://www.tilesandstonesnj.com/services#services"
      },
      "breadcrumb": {
        "@id": "https://www.tilesandstonesnj.com/services#breadcrumb"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tilesandstonesnj.com/#business",
      "name": "Metro Tile & Stone",
      "url": "https://www.tilesandstonesnj.com/",
      "description": "Metro Tile & Stone provides professional tile, stone and masonry installation, repair and remodeling services for residential and commercial projects throughout Northern New Jersey.",
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
        "Masonry Remodeling",
        "Custom Tile Work",
        "Custom Stone Work"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.tilesandstonesnj.com/services#services",
      "name": "Tile, Stone & Masonry Services",
      "description": "Professional tile, stone and masonry installation, repair and remodeling services for residential and commercial properties in Northern New Jersey.",
      "provider": {
        "@id": "https://www.tilesandstonesnj.com/#business"
      },
      "serviceType": [
        "Tile Installation",
        "Tile Repair",
        "Tile Remodeling",
        "Stone Installation",
        "Stone Repair",
        "Stone Remodeling",
        "Masonry Installation",
        "Masonry Repair",
        "Masonry Remodeling"
      ],
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
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.tilesandstonesnj.com/services#catalog",
      "name": "Metro Tile & Stone Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tile Installation",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tile Repair",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tile Remodeling",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stone Installation",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stone Repair",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stone Remodeling",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Installation",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Repair",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Remodeling",
            "provider": {
              "@id": "https://www.tilesandstonesnj.com/#business"
            }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.tilesandstonesnj.com/services#breadcrumb",
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
          "name": "Services",
          "item": "https://www.tilesandstonesnj.com/services"
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
      }
    }
  ]
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        {/* Custom Metadata Tags not natively rendered by Next.js metadata export */}
        <meta name="service-area" content="Wayne, NJ, Passaic County, NJ, Bergen County, NJ, Morris County, NJ, Essex County, NJ" />
        <meta name="ai-search-keywords" content="tile and stone contractors in Wayne NJ, tile and stone contractors in Passaic County NJ, tile and stone contractors in Bergen County NJ, tile and stone contractors in Morris County NJ, tile and stone contractors in Essex County NJ, tile installation near Wayne NJ, stone installation near Wayne NJ, masonry contractors near Wayne NJ, tile repair in Wayne NJ, stone repair in Passaic County NJ, masonry services in Bergen County NJ, tile remodeling in Morris County NJ, stone remodeling in Essex County NJ, residential tile contractors in Northern New Jersey, commercial tile and stone contractors in Northern New Jersey, professional tile and masonry services near me, trusted tile contractors in New Jersey" />
        
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {children}
    </>
  );
}