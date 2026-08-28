import Link from "next/link";

const MasonryServicesPassaicCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Passaic County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Custom Tile & Stone for Homes and Interiors Across Passaic County
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ serves homeowners, designers, architects, and builders throughout Passaic County, New Jersey, with a focus on distinctive tile, natural stone, and carefully executed interior surfaces.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Located in Wayne, our work extends into communities across the county, where every property brings different architectural proportions, existing materials, functional requirements, and design goals. Rather than approaching tile and stone as interchangeable finishes, we consider how each material can contribute to the character of the finished space.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From a custom kitchen or bathroom to a fireplace, feature wall, stone slab installation, or detailed tile application, the process begins with understanding the project and choosing materials that make sense for it.
          </p>

          {/* Interactive Service Area Navigation Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="font-sans mb-4 text-xs uppercase tracking-widest text-neutral-400">
              Select Your Service Area
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-sans text-xs sm:gap-4 sm:text-sm">
              <Link 
                href="/services/masonry/wayne-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Wayne County, NJ
              </Link>
              <Link 
                href="/services/masonry/passaic-county-nj"
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
              >
                Passaic County, NJ
              </Link>
              <Link 
                href="/services/masonry/bergen-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Bergen County, NJ
              </Link>
              <Link 
                href="/services/masonry/morris-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Morris County, NJ
              </Link>
              <Link 
                href="/services/masonry/essex-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
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
              src="/images/a1.webp"
              alt="Custom Tile and Stone Selection in Passaic County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Tile & Stone That Belongs to the Architecture
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              The most effective surface installations feel connected to the room around them. That means considering more than color. Tile size, stone movement, surface texture, grout lines, slab dimensions, lighting, cabinetry, flooring, and architectural details can all affect how a finished installation is perceived.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              For natural stone, the individual slab can be especially important. Veining and mineral variation may determine where the material works best and how it should be oriented. Thoughtful planning allows those characteristics to become part of the design.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Tile size and orientation",
                "Stone movement and veining",
                "Surface texture and finish",
                "Grout lines and joint spacing",
                "Slab dimensions and scale",
                "Lighting conditions",
                "Surrounding cabinetry",
                "Flooring alignment",
                "Architectural proportions",
                "Overall visual composition",
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
              From custom kitchens and bathrooms to fireplaces, feature walls, and book-matched stone installations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Natural Stone Selection */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Natural Stone Selection</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Choosing stone from a small sample doesn't always show the final look. Full slabs reveal color, scale, pattern, and movement that guide the design.
              </p>
            </div>

            {/* Custom Kitchen Surfaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Custom Kitchen Surfaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Countertops, islands, and backsplashes establish room direction. A patterned quartzite centerpiece or refined marble foundation creates cohesive spaces.
              </p>
            </div>

            {/* Bathrooms & Custom Vanities */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathrooms & Vanities</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Coordinate stone across vanities, shower walls, benches, and niches, pairing tile to introduce texture and pattern within one unified palette.
              </p>
            </div>

            {/* Fireplaces & Feature Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Feature Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Give rooms a strong architectural focal point using large-format stone to emphasize natural movement or carefully selected tile patterns.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Position complementary stone slabs so their natural patterns create a mirrored visual relationship across prominent surfaces.
              </p>
            </div>

            {/* Tile Applications */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile Applications</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Provide structure and texture for floors, walls, showers, backsplashes, and entryways using precise size, finish, and joint spacing.
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
              Marble, Quartzite, Travertine & Onyx
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Explore our core selection of natural stones chosen for their exceptional character and architectural potential.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Marble</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Offers natural elegance through individual veining and tonal variation, creating sophisticated surfaces for kitchens, bathrooms, and fireplaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Well suited for projects where natural visual movement and durability are both important, providing flexibility for countertops and islands.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Brings warmth and organic texture to interiors, complementing both traditional architectural details and cleaner contemporary designs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Selected for distinctive appearance and natural translucency, becoming an exceptional focal material for walls, bars, and specialty installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Passaic County Communities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Two Decades of Stonecraft Experience: Founded by Dan Kush
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Natural stone requires careful handling at every stage. Measurements, fabrication, layout, joints, transitions, and installation details can all affect the finished result.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose stonecraft experience spans more than two decades. His background includes work on residences, restaurants, and private galleries, with a process centered on precision and respect for the material.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Passaic County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Passaic County, including:
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
              <span>◆ Haledon</span>
              <span>◆ North Haledon</span>
              <span>◆ Hawthorne</span>
              <span>◆ Prospect Park</span>
              <span>◆ Passaic</span>
              <span>◆ West Milford</span>
              <span>◆ Bloomingdale</span>
              <span>◆ Butler</span>
              <span>◆ Kinnelon</span>
            </div>
            <p className="font-sans mt-6 text-xs leading-relaxed text-neutral-600">
              Each community includes a mix of property types and architectural styles. We approach material selection and installation according to the individual project rather than applying a single design formula.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What tile and stone services are available in Passaic County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ works with clients on natural stone selection, countertops, vanities, fireplaces, feature walls, backsplashes, tile applications, book-matched installations, and other custom surface projects.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Which natural stones are available?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                The collection includes materials such as marble, quartzite, travertine, and onyx, along with natural stone slabs selected according to project requirements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can you help with selecting a stone slab?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Slab selection can consider the material's color, movement, veining, dimensions, finish, intended application, and relationship to the surrounding design.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Is book-matched stone suitable for every project?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                No. Book-matching works best when the available slabs have complementary patterns and when the installation provides enough visual space for the mirrored composition to be appreciated.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can tile and stone be combined in the same room?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Combining tile and stone can create contrast and visual hierarchy. The materials should be coordinated through color, scale, texture, pattern, or finish so they work together.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What areas of Passaic County do you serve?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ serves Wayne and communities throughout Passaic County, including Clifton, Paterson, Totowa, Little Falls, Woodland Park, Pompton Lakes, Ringwood, Wanaque, Hawthorne, and surrounding communities.
              </p>
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
            A successful tile or stone installation begins with decisions made before the material reaches the wall or floor.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            If you're planning a renovation, new construction project, fireplace, kitchen, bathroom, or custom interior in Passaic County, NJ, Tiles & Stones NJ can help you evaluate materials and develop a surface approach suited to the space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/stones/wayne-county-nj"
              className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-800 px-6 py-3 text-sm font-semibold tracking-wider text-neutral-200 uppercase transition-colors duration-300 hover:border-caramel hover:text-caramel"
            >
              Explore Stones &rarr;
            </Link>
            <Link
              href="/services/tiles/wayne-county-nj"
              className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-800 px-6 py-3 text-sm font-semibold tracking-wider text-neutral-200 uppercase transition-colors duration-300 hover:border-caramel hover:text-caramel"
            >
              Explore Tiles &rarr;
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-800 px-6 py-3 text-sm font-semibold tracking-wider text-neutral-200 uppercase transition-colors duration-300 hover:border-caramel hover:text-caramel"
            >
              View Our Work &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-caramel bg-caramel px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Schedule a Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MasonryServicesPassaicCountyNj;