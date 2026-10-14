// Add new blogs to the TOP of this array. 
// The home page will automatically pull the first 3.

import {
  installationRepairRemodelingPassaicCountyNj,
  installationRepairRemodelingPassaicCountyNjMeta,
  installationRepairRemodelingPassaicCountyNjSchema,
} from "./blog-content/installationRepairRemodelingPassaicCountyNj";
import {
  masonryContractorWayneNjCustomMasonryIdeas,
  masonryContractorWayneNjCustomMasonryIdeasMeta,
  masonryContractorWayneNjCustomMasonryIdeasSchema,
} from "./blog-content/MasonryContractorWayneNjCustomMasonryIdeas";

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
  schema?: Record<string, any>;
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
    slug: "masonry-contractor-wayne-nj-custom-masonry-ideas",
    category: masonryContractorWayneNjCustomMasonryIdeasMeta.category,
    date: masonryContractorWayneNjCustomMasonryIdeasMeta.date,
    datePublished: masonryContractorWayneNjCustomMasonryIdeasMeta.datePublished,
    title: masonryContractorWayneNjCustomMasonryIdeasMeta.titleText,
    description: masonryContractorWayneNjCustomMasonryIdeasMeta.summary,
    image: masonryContractorWayneNjCustomMasonryIdeasMeta.ogImage,
    author: {
      name: masonryContractorWayneNjCustomMasonryIdeasMeta.authorName,
    },
    content: masonryContractorWayneNjCustomMasonryIdeas,
    schema: masonryContractorWayneNjCustomMasonryIdeasSchema,
    seo: {
      title: masonryContractorWayneNjCustomMasonryIdeasMeta.title,
      description: masonryContractorWayneNjCustomMasonryIdeasMeta.description,
      keywords: masonryContractorWayneNjCustomMasonryIdeasMeta.keywords,
      ogImage: masonryContractorWayneNjCustomMasonryIdeasMeta.ogImage,
      canonical:
        "https://www.tilesandstonesnj.com/blogs/masonry-contractor-wayne-nj-custom-masonry-ideas/",
      robots: {
        index: true,
        follow: true,
      },
    },
  },
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
    schema: installationRepairRemodelingPassaicCountyNjSchema,
    seo: {
      title: installationRepairRemodelingPassaicCountyNjMeta.title,
      description: installationRepairRemodelingPassaicCountyNjMeta.description,
      keywords: installationRepairRemodelingPassaicCountyNjMeta.keywords,
      ogImage: installationRepairRemodelingPassaicCountyNjMeta.ogImage,
      canonical:
        "https://www.tilesandstonesnj.com/blogs/installation-repair-remodeling-passaic-county-nj",
      robots: {
        index: true,
        follow: true,
      },
    },
  },
  {
    slug: "page-not-found-guide",
    category: "CRAFT",
    date: "",
    datePublished: "2026-01-01T00:00:00Z",
    title: "Wet rooms, dry logic: sealing marble that lasts.",
    description:
      "The step-by-step sealing regimen we use to keep pale marble showers pristine for decades, not seasons.",
    image: "/images/a3.webp",
    author: {
      name: "Studio Expert",
    },
    content: "<p>Full article content goes here...</p>",
    seo: {
      title: "Sealing Marble in Wet Rooms | Craft & Logic | Your Studio Name",
      description:
        "Our step-by-step sealing regimen for keeping pale marble showers pristine for decades.",
      keywords:
        "marble sealing, wet room design, pale marble maintenance, bathroom stone",
      ogImage: "/images/a3.webp",
      robots: {
        index: false,
        follow: false,
      },
    },
  },
];