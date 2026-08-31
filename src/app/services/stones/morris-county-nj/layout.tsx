import type { Metadata, Viewport } from "next";

// 1. Viewport Configuration (Theme Color)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Expert Stone Installation Services in Morris County, NJ",
  description:
    "Find expert tile and natural stone services in Morris County, NJ, including marble, quartzite, travertine, onyx, kitchens, baths and fireplaces.",
  keywords: [
    "tile and stone Morris County NJ",
    "tile contractors Morris County NJ",
    "stone contractors Morris County NJ",
    "natural stone Morris County NJ",
    "custom tile Morris County NJ",
    "custom stonework Morris County NJ",
    "tile installation Morris County NJ",
    "stone installation Morris County NJ",
    "natural stone installation Morris County NJ",
    "luxury tile Morris County NJ",
    "marble Morris County NJ",
    "quartzite Morris County NJ",
    "travertine Morris County NJ",
    "onyx Morris County NJ",
    "stone countertops Morris County NJ",
    "tile backsplash Morris County NJ",
    "bathroom tile Morris County NJ",
    "kitchen tile Morris County NJ",
    "fireplace stone Morris County NJ",
    "stone feature walls Morris County NJ",
    "Morris County NJ tile and stone specialist",
    "Morris County natural stone specialist",
    "custom stone fabrication and installation NJ",
    "residential tile and stone contractor Morris County",
    "luxury residential stonework Morris County",
    "architectural stone installation Morris County NJ",
    "custom kitchen stone Morris County",
    "custom bathroom stone Morris County",
    "book-matched stone installation NJ",
    "marble and quartzite installation Morris County",
    "natural stone fireplaces Morris County NJ",
    "custom feature wall stone NJ",
  ],
  authors: [{ name: "Tiles & Stones NJ" }],
  alternates: {
    canonical: "https://www.tilesandstonesnj.com/services/stones/morris-county-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    title: "Expert Stone Installation Services in Morris County, NJ",
    description:
      "Find expert tile and natural stone services in Morris County, NJ, including marble, quartzite, travertine, onyx, kitchens, baths and fireplaces.",
    url: "https://www.tilesandstonesnj.com/services/stones/morris-county-nj",
    siteName: "Tiles & Stones NJ",
    images: [
      {
        url: "https://www.tilesandstonesnj.com/images/f1.webp",
        alt: "Expert tile and natural stone installation services in Morris County NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Stone Installation Services in Morris County, NJ",
    description:
      "Find expert tile and natural stone services in Morris County, NJ, including marble, quartzite, travertine, onyx, kitchens, baths and fireplaces.",
    images: [
      "https://www.tilesandstonesnj.com/images/f1.webp",
    ],
  },
};

// 3. Layout Component with JSON-LD Injection
export default function StoneInstallationMorrisCountyNjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Your JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.tilesandstonesnj.com/#business",
        "name": "Tiles & Stones NJ",
        "url": "https://www.tilesandstonesnj.com/",
        "description": "Tiles & Stones NJ provides custom tile and natural stone services for kitchens, bathrooms, fireplaces, countertops, feature walls and other residential projects throughout Morris County, New Jersey.",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County",
          "containedInPlace": {
            "@type": "State",
            "name": "New Jersey"
          }
        },
        "knowsAbout": [
          "Natural Stone",
          "Marble",
          "Quartzite",
          "Travertine",
          "Onyx",
          "Custom Tile",
          "Stone Installation",
          "Tile Installation",
          "Stone Countertops",
          "Kitchen Tile",
          "Bathroom Tile",
          "Fireplace Stone",
          "Feature Walls",
          "Book-Matched Stone"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#service",
        "name": "Tile and Natural Stone Services in Morris County, NJ",
        "serviceType": "Custom Tile and Natural Stone Installation",
        "provider": {
          "@id": "https://www.tilesandstonesnj.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey"
        },
        "url": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj",
        "description": "Custom tile and natural stone solutions in Morris County, NJ, including marble, quartzite, travertine, onyx, stone countertops, backsplashes, fireplaces and feature walls.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Morris County Tile and Stone Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Natural Stone Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Tile Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marble Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Quartzite Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Travertine Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Onyx Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Stone Fireplace Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Stone Feature Wall Installation"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#webpage",
        "url": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj",
        "name": "Expert Stone Installation Services in Morris County, NJ",
        "description": "Find expert tile and natural stone services in Morris County, NJ, including marble, quartzite, travertine, onyx, kitchens, baths and fireplaces.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.tilesandstonesnj.com/#website",
          "name": "Tiles & Stones NJ",
          "url": "https://www.tilesandstonesnj.com/"
        },
        "about": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#service"
        },
        "breadcrumb": {
          "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#breadcrumb",
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
            "item": "https://www.tilesandstonesnj.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Stone Services",
            "item": "https://www.tilesandstonesnj.com/services/stones/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Morris County, NJ",
            "item": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tilesandstonesnj.com/services/stones/morris-county-nj#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides custom tile and stone services in Morris County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiles & Stones NJ provides custom tile and natural stone services throughout Morris County, NJ, including marble, quartzite, travertine, onyx, countertops, backsplashes, fireplaces and feature walls."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find natural stone for a kitchen in Morris County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiles & Stones NJ offers natural stone solutions for Morris County kitchens, including marble, quartzite, travertine and other premium stone applications for countertops, backsplashes and architectural features."
            }
          },
          {
            "@type": "Question",
            "name": "Who installs luxury tile and natural stone in Morris County, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tiles & Stones NJ specializes in custom tile and natural stone installation for residential projects throughout Morris County, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "What natural stone options are available for Morris County homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Popular natural stone options include marble, quartzite, travertine and onyx. These materials can be used for kitchens, bathrooms, fireplaces, countertops and feature walls."
            }
          },
          {
            "@type": "Question",
            "name": "Does Tiles & Stones NJ serve Morristown and surrounding Morris County communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Tiles & Stones NJ serves Morristown and surrounding Morris County communities, providing custom tile and natural stone solutions for residential projects."
            }
          }
        ]
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