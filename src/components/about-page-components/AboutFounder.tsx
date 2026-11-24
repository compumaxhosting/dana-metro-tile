export default function AboutFounder() {
  return (
    <section className="bg-theme-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
          {/* Left */}
          <div>
            <p className="text-[12px] tracking-[5px] uppercase text-caramel font-sans mb-6 font-medium">
              Our Founder
            </p>

            <h2 className="font-cormorant text-[52px] md:text-[68px] leading-none text-premium-black">
              Dan Kush
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[640px]">
            <p className="text-[16px] leading-[1.5] text-premium-black/80 font-sans mb-5">
              Metro Group Construction is a professional tile, stone, and masonry contractor based in Wayne, NJ, specializing in high-quality residential and commercial projects. Our services include tile installation, marble installation, porcelain tile installation, natural stone installation, custom stonework, and masonry solutions. We proudly serve homeowners, businesses, and property professionals throughout Passaic County, Bergen County, Morris County, and Essex County, NJ. With a focus on quality craftsmanship, precision, and attention to detail, we deliver customized, durable, and beautiful results tailored to every project.
            </p>

            <p className="text-[16px] leading-[1.5] text-premium-black/80 font-sans mb-5">
              Today the studio partners with a small circle of architects,
              interior designers, and homeowners who share one belief: material
              integrity is the beginning of beautiful design.
            </p>

            <p className="text-[16px] leading-[1.5] text-premium-black/80 font-sans">
              Every project is led personally, from the first slab selection at
              the yard to the final polish on the last grout line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}