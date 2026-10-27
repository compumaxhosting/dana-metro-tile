import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const siteUrl = "https://www.tilesandstonesnj.com";
const serviceTypes = ["tiles", "stones", "masonry"];
const serviceAreas = [
  "wayne-county-nj",
  "passaic-county-nj",
  "bergen-county-nj",
  "morris-county-nj",
  "essex-county-nj",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/gallery", priority: 0.8 },
    { path: "/blogs", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...staticPages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      priority,
    })),
    ...serviceTypes.flatMap((serviceType) =>
      serviceAreas.map((serviceArea) => ({
        url: `${siteUrl}/services/${serviceType}/${serviceArea}`,
        priority: serviceArea === "wayne-county-nj" ? 0.64 : 0.512,
      })),
    ),
    ...blogs.map((blog) => ({
      url: `${siteUrl}/blogs/${blog.slug}`,
      priority: 0.512,
    })),
  ];
}
