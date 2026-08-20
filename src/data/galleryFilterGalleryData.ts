export type GalleryCategory =
  | "ALL"
  | "KITCHEN"
  | "BATH"
  | "INTERIOR"
  | "EXTERIOR";

export interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  image: string;
  featured?: boolean;
}

export const galleryCategories: GalleryCategory[] = [
  "ALL",
  "KITCHEN",
  "BATH",
  "INTERIOR",
  "EXTERIOR",
];

export const galleryFilterGalleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Calacatta Gold Suite",
    subtitle: "MASTER BATH",
    category: "BATH",
    image: "/images/e1.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Onyx Vein Foyer",
    subtitle: "ENTRY",
    category: "INTERIOR",
    image: "/images/b3.webp",
  },
  {
    id: 3,
    title: "Ivory Subway Kitchen",
    subtitle: "KITCHEN",
    category: "KITCHEN",
    image: "/images/c1.webp",
  },
  {
    id: 4,
    title: "Silver Marble Shower",
    subtitle: "WET ROOM",
    category: "BATH",
    image: "/images/f1.webp",
  },
  {
    id: 5,
    title: "Travertine Herringbone",
    subtitle: "FLOORING",
    category: "INTERIOR",
    image: "/images/c3.webp",
  },
  {
    id: 6,
    title: "Luxury Driveway",
    subtitle: "EXTERIOR",
    category: "EXTERIOR",
    image: "/images/d1.webp",
    featured: true,
  },

];