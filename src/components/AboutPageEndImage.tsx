import Image from "next/image";

export default function AboutPageEndImage() {
  return (
    <section className="bg-theme-cream py-28">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Image */}
        <div className="relative w-full h-[600px] overflow-hidden">
          <Image
            src="/images/gallery-foyer.jpg" // Replace with your image
            alt="Luxury stone foyer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-8 max-w-[760px]">
          <p className="text-[12px] uppercase tracking-[5px] text-caramel font-sans mb-5">
            Recent Work
          </p>

          <h3 className="font-cormorant italic text-[35px] leading-[1.08] text-premium-black font-light">
            "A residence in Alpine — hand-cut onyx foyer,
            <br />
            book-matched from a single 3,000 lb slab."
          </h3>
        </div>
      </div>
    </section>
  );
}