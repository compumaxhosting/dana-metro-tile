import Link from "next/link";

const StoneServicesPassaicCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Passaic County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Distinctive Tile & Stone Work for Passaic County, NJ
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            The character of a space often begins with what you choose to put on its surfaces. Tiles & Stones NJ works with homeowners, designers, architects, and builders throughout Passaic County, NJ, providing carefully selected tile and natural stone for interiors that demand more than an ordinary finish.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Based in Wayne, our work combines thoughtful material selection with precise craftsmanship. We approach every project as an opportunity to understand the material, its natural variation, and the architecture around it—then use those qualities to create a cohesive finished space.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From a sophisticated kitchen in Wayne to a custom bathroom in Clifton, a dramatic fireplace in Totowa, or a statement wall in Little Falls, we help clients throughout Passaic County bring distinctive surface materials into their projects.
          </p>

          {/* Interactive County Navigation Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="font-sans mb-4 text-xs uppercase tracking-widest text-neutral-400">
              Select Your Service Area
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-sans text-xs sm:gap-4 sm:text-sm">
              <Link 
                href="/services/stones/wayne-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Wayne County, NJ
              </Link>
              <Link 
                href="/services/stones/passaic-county-nj"
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
              >
                Passaic County, NJ
              </Link>
              <Link 
                href="/services/stones/bergen-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Bergen County, NJ
              </Link>
              <Link 
                href="/services/stones/morris-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Morris County, NJ
              </Link>
              <Link 
                href="/services/stones/essex-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Essex County, NJ
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Main Material Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/f1.webp"
              alt="Tile and Stone Selection in Passaic County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Tile & Stone Designed Around Your Space: The Material Shapes the Design
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Natural stone is never completely uniform. Its veining, movement, color, texture, and variation are part of what makes it valuable.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Rather than treating these characteristics as imperfections, we consider them essential elements of the design. The selection of the material, its orientation, the layout, and the surrounding surfaces all work together to determine how the finished installation will look and feel.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Overall color and tone",
                "Natural movement and veining",
                "Slab dimensions",
                "Thickness and finish",
                "Intended application",
                "Maintenance considerations",
                "Layout and orientation",
                "Visual relationships between slabs",
              ].map((service, index) => (
                <div key={index} className="font-sans flex items-start gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700 sm:text-base">
                  <span className="text-caramel mt-0.5">◆</span>
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Custom Applications Grid */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Custom Applications Across Passaic County
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Explore how carefully integrated slab and tile work brings character to kitchens, bathrooms, fireplaces, and architectural focal points.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchens */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchens</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A kitchen countertop or island can become one of the room's defining elements. Expressive stone can provide a visual anchor while coordinating with cabinetry, flooring, backsplashes, and architectural details.
              </p>
            </div>

            {/* Bathrooms */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathrooms</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                From understated natural stone to dramatic slab installations, the right material can give a bathroom a highly finished, cohesive appearance. Stone can be incorporated into vanities, shower walls, niches, and backsplashes.
              </p>
            </div>

            {/* Fireplaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A fireplace creates an opportunity to showcase the natural character of a stone. Large-format surfaces and carefully considered slab placement can turn the surround into a central architectural feature.
              </p>
            </div>

            {/* Feature Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Feature Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A full-height stone wall can introduce texture, movement, and visual depth without relying on additional decorative elements. The natural pattern of the material becomes the focal point.
              </p>
            </div>

            {/* Vanities & Bars */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Vanities & Bars</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Smaller architectural features can have an equally strong impact. Onyx, marble, quartzite, and other distinctive stones can create memorable vanities, bar surfaces, and entertaining areas.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Book-matching places complementary slabs opposite one another so their natural patterns create a mirrored effect, turning dramatic veining into a continuous visual composition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stone Materials Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Featured Stone Materials
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Sourced for their unique character, natural patterns, and architectural potential.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Marble</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Prized for its natural veining and refined appearance, bringing individual personality to kitchens, bathrooms, and fireplaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Combines natural beauty with exceptional durability, making it ideal for countertops, islands, and high-use surfaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Adds warmth and organic texture to an interior, complementing both traditional and contemporary environments.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                An expressive material with distinctive patterns and translucent qualities, perfect for feature walls, bars, and statement installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Passaic County Localities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Craftsmanship Matters: Precision From Selection to Installation
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Exceptional materials deserve careful handling. Every stage of a stone project—from selecting the slab to determining its orientation and completing the installation—can influence the final result.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ was founded by Dan Kush, whose experience in stonecraft spans more than two decades. His background includes work across residential spaces, restaurants, and private galleries, developing an approach centered on precision, material integrity, and close attention to detail.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Passaic County, NJ</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Passaic County and surrounding communities:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Wayne</span>
              <span>◆ Clifton</span>
              <span>◆ Paterson</span>
              <span>◆ Totowa</span>
              <span>◆ Little Falls</span>
              <span>◆ Woodland Park</span>
              <span>◆ Pompton Lakes</span>
              <span>◆ Pompton Plains</span>
              <span>◆ Ringwood</span>
              <span>◆ Wanaque</span>
              <span>◆ Hawthorne</span>
              <span>◆ Haledon</span>
              <span>◆ North Haledon</span>
              <span>◆ Prospect Park</span>
              <span>◆ Passaic</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Start Your Passaic County Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Planning a kitchen, bathroom, fireplace, feature wall, or custom tile and stone installation in Passaic County?
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            Explore our materials and discover how the right tile or stone can transform the character of your space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-caramel bg-caramel px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StoneServicesPassaicCountyNj;