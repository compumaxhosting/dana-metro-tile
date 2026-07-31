import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Calacatta Gold Suite",
    category: "MASTER BATH",
    image: "/images/a4.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Onyx Vein Foyer",
    category: "FOYER",
    image: "/images/b1.jpeg",
  },
  {
    id: 3,
    title: "Ivory Subway Kitchen",
    category: "KITCHEN",
    image: "/images/b2.jpeg",
  },
  {
    id: 4,
    title: "Silver Marble Shower",
    category: "WET ROOM",
    image: "/images/b3.jpeg",
  },
  {
    id: 5,
    title: "Travertine Herringbone",
    category: "FLOORING",
    image: "/images/b4.jpeg",
  },
];

export default function PortfolioHome() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section className="bg-theme-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-caramel font-sans">
              Portfolio
            </p>

            <h2 className="font-cormorant text-5xl leading-none text-[#14110f] md:text-7xl">
              Selected{" "}
              <span className="italic text-caramel">
                works.
              </span>
            </h2>
          </div>

          <Link href="/gallery" className="group flex w-fit items-center gap-3 border-b border-premium-black pb-2 text-xs uppercase tracking-[0.35em] text-caramel font-sans">
            See Full Gallery

            <ArrowUpRight
              size={16}
              className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Desktop */}

        <div className="hidden gap-4 lg:grid lg:grid-cols-12">
          {/* Featured */}

          <div className="col-span-8">
            <PortfolioCard {...featured} height="h-[620px]" />
          </div>

          {/* Right */}

          <div className="col-span-4">
            <PortfolioCard {...others[0]} height="h-[620px]" />
          </div>

          {/* Bottom */}

          {others.slice(1).map((project) => (
            <div
              key={project.id}
              className="col-span-4"
            >
              <PortfolioCard
                {...project}
                height="h-[420px]"
              />
            </div>
          ))}
        </div>

        {/* Mobile */}

        <div className="space-y-5 lg:hidden">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              {...project}
              height="h-[420px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  image: string;
  title: string;
  category: string;
  height: string;
}

function PortfolioCard({
  image,
  title,
  category,
  height,
}: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden ${height}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      <div className="absolute bottom-8 left-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-premium-beige font-sans">
          {category}
        </p>

        <h3 className="font-cormorant text-3xl text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}