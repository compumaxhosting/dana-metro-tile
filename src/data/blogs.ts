// Add new blogs to the TOP of this array. 
// The home page will automatically pull the first 3.

import { installationRepairRemodelingPassaicCountyNj, installationRepairRemodelingPassaicCountyNjMeta } from "./blog-content/installationRepairRemodelingPassaicCountyNj";

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  datePublished: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
  };
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    canonical?: string;
    robots?: {
      index: boolean;
      follow: boolean;
    };
  };
}

export const blogs: BlogPost[] = [
  {
    slug: "installation-repair-remodeling-passaic-county-nj",
    category: installationRepairRemodelingPassaicCountyNjMeta.category,
    date: installationRepairRemodelingPassaicCountyNjMeta.date,
    datePublished: installationRepairRemodelingPassaicCountyNjMeta.datePublished,
    title: installationRepairRemodelingPassaicCountyNjMeta.titleText,
    description: installationRepairRemodelingPassaicCountyNjMeta.summary,
    image: installationRepairRemodelingPassaicCountyNjMeta.ogImage,
    author: {
      name: installationRepairRemodelingPassaicCountyNjMeta.authorName,
    },
    content: installationRepairRemodelingPassaicCountyNj,
    seo: {
      title: installationRepairRemodelingPassaicCountyNjMeta.title,
      description: installationRepairRemodelingPassaicCountyNjMeta.description,
      keywords: installationRepairRemodelingPassaicCountyNjMeta.keywords,
      ogImage: installationRepairRemodelingPassaicCountyNjMeta.ogImage,
      canonical: "https://www.tilesandstonesnj.com/blogs/installation-repair-remodeling-passaic-county-nj",
      robots: {
        index: true,
        follow: true,
      }
    }
  },
  {
    slug: "page-not-found-guide",
    category: "TECHNIQUE",
    date: "",
    datePublished: "2026-02-01T00:00:00Z",
    title: "The forgotten geometry of herringbone.",
    description: "A short history of a pattern that has quietly outlasted every design trend of the last four centuries.",
    image: "/images/a4.webp",
    author: {
      name: "Studio Expert",
    },
    content: "<p>Full article content goes here...</p>",
    seo: {
      title: "The forgotten geometry of herringbone | Your Studio Name",
      description: "A short history of the herringbone pattern and why it outlasts design trends.",
      keywords: "herringbone, tile geometry, historic patterns, design technique",
      ogImage: "/images/a4.webp",
      robots: {
        index: false,
        follow: false,
      }
    }
  },
  {
    slug: "page-not-found-guide",
    category: "CRAFT",
    date: "",
    datePublished: "2026-01-01T00:00:00Z",
    title: "Wet rooms, dry logic: sealing marble that lasts.",
    description: "The step-by-step sealing regimen we use to keep pale marble showers pristine for decades, not seasons.",
    image: "/images/a3.webp",
    author: {
      name: "Studio Expert",
    },
    content: "<p>Full article content goes here...</p>",
    seo: {
      title: "Sealing Marble in Wet Rooms | Craft & Logic | Your Studio Name",
      description: "Our step-by-step sealing regimen for keeping pale marble showers pristine for decades.",
      keywords: "marble sealing, wet room design, pale marble maintenance, bathroom stone",
      ogImage: "/images/a3.webp",
      robots: {
        index: false,
        follow: false,
      }
    }
  },
];