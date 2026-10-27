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
import {
  howToChooseTileContractorWayneNj,
  howToChooseTileContractorWayneNjMeta,
  howToChooseTileContractorWayneNjSchema,
} from "./blog-content/howToChooseTileContractorWayneNj";

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
  schema?: Record<string, unknown>;
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
    slug: howToChooseTileContractorWayneNjMeta.slug,
    category: howToChooseTileContractorWayneNjMeta.category,
    date: howToChooseTileContractorWayneNjMeta.date,
    datePublished: howToChooseTileContractorWayneNjMeta.datePublished,
    title: howToChooseTileContractorWayneNjMeta.titleText,
    description: howToChooseTileContractorWayneNjMeta.summary,
    image: howToChooseTileContractorWayneNjMeta.ogImage,
    author: {
      name: howToChooseTileContractorWayneNjMeta.authorName,
    },
    content: howToChooseTileContractorWayneNj,
    schema: howToChooseTileContractorWayneNjSchema,
    seo: {
      title: howToChooseTileContractorWayneNjMeta.title,
      description: howToChooseTileContractorWayneNjMeta.description,
      keywords: howToChooseTileContractorWayneNjMeta.keywords,
      ogImage: howToChooseTileContractorWayneNjMeta.ogImage,
      canonical:
        "https://www.tilesandstonesnj.com/blogs/how-to-choose-tile-contractor-wayne-nj",
      robots: {
        index: true,
        follow: true,
      },
    },
  },
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
        "https://www.tilesandstonesnj.com/blogs/masonry-contractor-wayne-nj-custom-masonry-ideas",
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
];