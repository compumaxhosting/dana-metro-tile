// Add new blogs to the TOP of this array. 
// The home page will automatically pull the first 3.

import { slabOnyxContent } from "./blog-content/slab-onyx";

export const blogs = [
  {
    slug: "reading-a-slab-book-matched-onyx",
    category: "MATERIAL",
    date: "MARCH 2026",
    title: "Reading a slab: the case for book-matched onyx.",
    description: "Why we spend hours at the yard before a single cut, and what a vein tells us about the room it will live in.",
    image: "/images/a2.webp",
    // ⬇ INSERT FULL BLOG CONTENT HERE (HTML, Markdown, or standard text strings)
    content: slabOnyxContent,
    
    // ⬇ INSERT SEO DATA HERE
    seo: {
      title: "Reading a slab: the case for book-matched onyx | Your Studio Name",
      description: "Discover why we spend hours at the yard before a single cut. Learn the art of selecting book-matched onyx.",
      keywords: "onyx, book-matched, stone selection, marble yard, luxury interiors",
      ogImage: "/images/a2.webp", // For social media sharing previews
    }
  },
  {
    slug: "the-forgotten-geometry-of-herringbone",
    category: "TECHNIQUE",
    date: "FEBRUARY 2026",
    title: "The forgotten geometry of herringbone.",
    description: "A short history of a pattern that has quietly outlasted every design trend of the last four centuries.",
    image: "/images/a4.webp",
    content: "<p>Full article content goes here...</p>",
    seo: {
      title: "The forgotten geometry of herringbone | Your Studio Name",
      description: "A short history of the herringbone pattern and why it outlasts design trends.",
      keywords: "herringbone, tile geometry, historic patterns, design technique",
      ogImage: "/images/a4.webp",
    }
  },
  {
    slug: "wet-rooms-dry-logic-sealing-marble",
    category: "CRAFT",
    date: "JANUARY 2026",
    title: "Wet rooms, dry logic: sealing marble that lasts.",
    description: "The step-by-step sealing regimen we use to keep pale marble showers pristine for decades, not seasons.",
    image: "/images/a3.webp",
    content: "<p>Full article content goes here...</p>",
    seo: {
      title: "Sealing Marble in Wet Rooms | Craft & Logic | Your Studio Name",
      description: "Our step-by-step sealing regimen for keeping pale marble showers pristine for decades.",
      keywords: "marble sealing, wet room design, pale marble maintenance, bathroom stone",
      ogImage: "/images/a3.webp",
    }
  },
];