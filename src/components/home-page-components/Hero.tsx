import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden sm:min-h-[700px]">
      {/* Background */}
      <img
        src="/images/hero-tiles.webp"
        alt="Luxury Stone"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div className="mb-5 flex items-center gap-4 sm:mb-8">
            <span className="h-px w-12 bg-premium-beige" />

            <p className="text-[11px] uppercase tracking-[0.35em] text-white font-sans">
              New Jersey · Tiles, Stones & Masonry
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] leading-[0.96] tracking-tight text-white">
            Tile, Stone & Masonry
            <span className="italic text-premium-beige">
              Contractors in Wayne, NJ
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl lg:leading-9">
            Tiles, stones, and masonry —
            designed, fabricated, and installed with craftsmanship across
            New Jersey.
          </p>

         {/* Buttons */}
<div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-5">
  <Link href="/gallery" className="flex h-12 items-center justify-center gap-4 bg-caramel px-9 uppercase tracking-[0.3em] text-xs text-white transition hover:bg-[#9f6a25] font-sans">
    View The Gallery
    <ArrowUpRight size={18} />
  </Link>

  <Link href="/contact" className="flex h-12 items-center justify-center border border-white/40 px-9 uppercase tracking-[0.3em] text-xs text-white transition hover:border-white font-sans">
    Request Consultation
  </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;