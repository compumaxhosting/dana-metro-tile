import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero-tiles.jpg"
        alt="Luxury Stone"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-24 md:px-10 lg:pb-28">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-premium-beige" />

            <p className="text-[11px] uppercase tracking-[0.35em] text-white font-sans">
              New Jersey · Tiles, Stones & Masonry
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-cormorant text-white leading-none text-[56px] md:text-[84px] lg:text-[96px]">
            Stone that{" "}
            <span className="italic text-premium-beige">
              speaks.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/90 md:text-[20px] font-sans">
            Tiles, stones, and masonry —
            designed, fabricated, and installed with craftsmanship across
            New Jersey.
          </p>

         {/* Buttons */}
<div className="mt-12 flex flex-col gap-5 sm:flex-row">
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