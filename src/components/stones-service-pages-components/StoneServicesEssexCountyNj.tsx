import Link from "next/link";

const StoneServicesEssexCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Essex County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Exceptional Tile & Stone for Essex County, NJ
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            The surfaces within a home or commercial space can establish its entire visual character. In Essex County, NJ, where historic architecture, established neighborhoods, renovated properties, and contemporary interiors exist side by side, tile and stone can provide both a practical finish and a defining design element.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Tiles & Stones NJ works with homeowners, architects, interior designers, and builders throughout Essex County to source and install distinctive tile and natural stone for carefully considered interiors.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Located in Wayne, NJ, our approach begins with the material. We look at the natural qualities of each stone, the architecture of the space, and the way the finished surface will be viewed and used. This allows the selection, layout, and installation to work together as one design rather than as separate steps.
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
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
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
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
              >
                Essex County, NJ
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Main Material Selection Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/f1.webp"
              alt="Exceptional Tile and Stone Selection in Essex County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Start With Materials Worth Seeing: Natural Stone Is Never One-Size-Fits-All
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              A natural stone slab can change considerably from one section to another. Veins can become stronger, colors can shift, and patterns can reveal themselves differently depending on how the material is cut and positioned.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              We consider the complete visual character of a material before deciding how it should be used. For projects featuring expressive stone, this can influence slab orientation, cut locations, seam placement, and the relationship between neighboring surfaces.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "The intended application",
                "Natural veining and movement",
                "Overall slab scale",
                "Color and tonal variation",
                "Surface finish",
                "Thickness",
                "Maintenance requirements",
                "Lighting",
                "Adjacent materials",
                "Fabrication and layout considerations",
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
              Custom Applications Across Essex County
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              From high-impact kitchens and continuous bathroom suites to architectural feature walls and book-matched stone compositions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchens */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchens Centered on Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Countertops, Islands & Backsplashes. Highly figured quartzite can become the island centerpiece, while quieter marble provides an elegant foundation. Backsplashes are curated to harmonize with the primary slab.
              </p>
            </div>

            {/* Bathrooms */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Cohesive Bathrooms</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Walls, Floors, Vanities & More. Stone defines vanities or shower walls while tile establishes geometric rhythm, allowing large-format installations to minimize visual interruption and highlight architecture.
              </p>
            </div>

            {/* Fireplaces & Feature Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Feature Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Create a Strong Architectural Moment. Stone placement emphasizes the natural flow of veining to frame fireplaces or create continuous floor-to-ceiling visual presence across large interior spans.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Book-Matched Installations</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                When Two Slabs Become One Composition. Uses complementary slabs to create a mirrored relationship, transforming expressive veining into a unified, seamless architectural statement.
              </p>
            </div>

            {/* Tile Completing the Design */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile That Completes the Design</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tile establishes texture, geometry, rhythm, and contrast. Considered in relation to the complete palette, tile balances stone, cabinetry, and fixtures for total spatial cohesion.
              </p>
            </div>

            {/* Precision Craftsmanship */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Precision Craftsmanship</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Experience Behind the Craft. Over two decades of stonecraft mastery ensures every cut, joint, transition, and orientation honors the material and delivers lasting structural beauty.
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
              Stone Materials for Different Design Directions
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Explore marble, quartzite, travertine, and onyx selected for distinctive texture, resilience, and visual movement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Marble</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Provides natural elegance through distinctive veining and tonal depth, perfect for understated bathrooms and dramatic kitchen surfaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Offers natural visual movement alongside strong performance characteristics for high-demand countertops, islands, and custom vanities.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Introduces warmth and natural organic texture that brings grounded character to contemporary spaces and historic estates alike.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Exhibits dramatic translucent qualities and vivid patterning, ideal for illuminated feature walls, bars, vanities, and statement fireplaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Essex County Communities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Precision From Slab Selection to Final Detail
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Working with natural stone requires an understanding of the material as well as careful execution. <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ was founded by Dan Kush, whose experience in stonecraft spans more than two decades.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Projects are personally guided from material selection through completion. Attention is given to the details that influence the finished result, including layout, cuts, joints, transitions, and installation quality.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Essex County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Essex County, New Jersey, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Montclair</span>
              <span>◆ West Orange</span>
              <span>◆ Livingston</span>
              <span>◆ Short Hills</span>
              <span>◆ Maplewood</span>
              <span>◆ South Orange</span>
              <span>◆ Millburn</span>
              <span>◆ Summit</span>
              <span>◆ Glen Ridge</span>
              <span>◆ Verona</span>
              <span>◆ Cedar Grove</span>
              <span>◆ Essex Fells</span>
              <span>◆ North Caldwell</span>
              <span>◆ Caldwell</span>
              <span>◆ Fairfield</span>
              <span>◆ Roseland</span>
              <span>◆ Bloomfield</span>
              <span>◆ Nutley</span>
              <span>◆ Belleville</span>
              <span>◆ Orange</span>
              <span>◆ East Orange</span>
              <span>◆ Newark</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Begin Your Essex County Tile & Stone Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Planning a kitchen, bathroom, fireplace, feature wall, or custom tile and stone installation in Essex County, NJ? Explore distinctive materials and discover how thoughtful selection and precise craftsmanship can change the character of your space.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            *Service availability and consultation scheduling may vary depending on project location and scope.
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

export default StoneServicesEssexCountyNj;