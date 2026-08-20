import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Tiles",
    description:
      "Ceramic and porcelain tile installations crafted for refined floors, walls, and feature details.",
  },
  {
    number: "02",
    title: "Stones",
    description:
      "Marble, travertine, and stone slabs shaped into elegant surfaces and sculptural statements.",
  },
  {
    number: "03",
    title: "Masonry",
    description:
      "Custom masonry work and architectural detailing built with enduring craft and precision.",
  },
];

const Disciplines = () => {
  return (
    <section
      className="relative overflow-hidden bg-premium-black py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/gallery-foyer.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 uppercase tracking-[0.4em] text-[12px] text-premium-beige font-sans">
              Disciplines
            </p>

            <h2 className="font-cormorant text-[46px] leading-[1.1] text-white md:text-[70px] lg:text-[76px]">
              Three disciplines.{" "}
              <span className="italic text-premium-beige">
                One standard.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-md leading-7 text-premium-beige/90 font-sans">
            From refined tile work to stone surfaces and masonry detailing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid overflow-hidden border border-premium-beige/20 bg-premium-black/95 lg:grid-cols-3 py-4">
          {services.map((item) => (
            <div
              key={item.number}
              className="border-b border-premium-beige/20 p-8 last:border-b-0 lg:border-b-0 lg:border-r lg:border-premium-beige/20 last:border-r-0"
            >
              <h3 className="mb-5 font-cormorant text-[54px] leading-none text-caramel">
                {item.number}
              </h3>

              <h4 className="font-cormorant text-[28px] leading-[1.25] text-white">
                {item.title}
              </h4>

              <p className="mt-8 text-[17px] leading-8 text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link href="/services" className="group inline-flex items-center gap-3 border-b border-premium-beige/80 pb-2 text-[13px] uppercase tracking-[0.35em] text-premium-beige font-sans transition-all hover:gap-5">
            Explore All Services

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;