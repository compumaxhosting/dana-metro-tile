export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  href: string; // <-- New property added for the URL
}

export const servicePageServices: ServiceItem[] = [
  {
    number: "01",
    title: "Tiles",
    description:
      "Ceramic, porcelain, and large-format tile installations for kitchens, baths, and feature walls with crisp grout lines and enduring finish.",
    image: "/images/hero-tiles.webp",
    features: [
      "Floor & wall installations",
      "Large-format tile layouts",
      "Bathroom & kitchen detailing",
      "Precise finishing & grout work",
    ],
    href: "/services/tile-services-wayne-nj", // <-- Add your specific link here
  },
  {
    number: "02",
    title: "Stones",
    description:
      "Marble, travertine, onyx, quartzite, and stone slabs selected for elegance, durability, and sculptural presence.",
    image: "/images/f1.webp",
    features: [
      "Stone sourcing & selection",
      "Feature walls & fireplaces",
      "Countertops & vanities",
      "Book-matched surfaces",
    ],
    href: "/services/stones", // <-- Add your specific link here
  },
  {
    number: "03",
    title: "Masonry",
    description:
      "Custom masonry work, architectural detailing, and structural finishes built with timeless craftsmanship and site-specific care.",
    image: "/images/a1.webp",
    features: [
      "Custom masonry detailing",
      "Fireplaces & walls",
      "Outdoor & interior builds",
      "Craftsmanship-led execution",
    ],
    href: "/services/masonry", // <-- Add your specific link here
  },
];