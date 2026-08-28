import Link from "next/link";

const MasonryServicesMorrisCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Morris County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Custom Surfaces for Morris County Homes & Interiors
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ provides tile and natural stone services for homeowners, architects, interior designers, and builders throughout Morris County, NJ. From kitchens and primary bathrooms to fireplaces, entryways, feature walls, and custom interiors, we help clients select and develop surfaces that fit the character and practical needs of each project.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Based in Wayne, NJ, we work with a range of architectural styles across Morris County. Our approach is centered on understanding the material before determining how it should be used. With natural stone, variations in veining, color, texture, and movement are part of what makes each slab distinctive.
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
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
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
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
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
              alt="Natural Stone Selection in Morris County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Natural Stone Selected With the Project in Mind: The Slab Can Shape the Design
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Natural stone should be evaluated at the scale in which it will actually be installed. A small sample may show the general color, but a full slab can reveal much more about its movement and pattern.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              When selecting stone, we consider the complete composition, intended application, dimensions, and relationship to the surrounding architecture.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "The intended application",
                "Slab dimensions and thickness",
                "Veining and natural movement",
                "Color variation",
                "Surface finish",
                "Lighting conditions",
                "Maintenance requirements",
                "Adjacent materials",
                "Layout and seam locations",
                "Overall visual balance",
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
              Custom Applications Across Morris County
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              From kitchen countertops and custom bathrooms to fireplaces, feature walls, and book-matched stone installations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchen Countertops & Islands */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchen Countertops & Islands</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Surfaces that anchor the room. A countertop or island can become the visual foundation, with patterned quartzite or refined marble establishing the space's direction.
              </p>
            </div>

            {/* Bathroom Tile & Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathroom Tile & Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Create continuity across the space. Coordinate vanities, shower walls, floors, and niches as a unified group to avoid a disconnected collection of finishes.
              </p>
            </div>

            {/* Fireplaces & Feature Surfaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Feature Surfaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Let the material become part of the architecture. Use large formats and natural stone movement to create a strong architectural focal point.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Designed around natural movement. Position complementary slabs to create mirrored patterns across walls, islands, and backsplashes.
              </p>
            </div>

            {/* Tile With Texture, Pattern & Scale */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile With Texture & Scale</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Influencing room rhythm through size, shape, finish, and pattern—providing restrained backgrounds or geometric contrast.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Craftsmanship & Execution</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Respecting the material through accurate measurements, layout planning, precise transitions, and hands-on guidance from start to finish.
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
                Offers natural variation and recognizable veining, making it suitable for elegant countertops, vanities, fireplaces, walls, and other interior features.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Often selected for projects where natural visual movement needs to be paired with a durable stone surface. Its appearance varies significantly by variety and slab.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Brings natural texture and warmer tonal qualities to an interior. Its variation can complement both classic and contemporary design approaches.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Has a distinctive visual quality created by its natural patterns and translucency. It can be particularly effective for statement walls, vanities, bars, and specialty installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Morris County Communities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Craftsmanship That Respects the Material: Founded by Dan Kush
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A well-selected material still requires careful execution. Accurate measurements, layout planning, fabrication, transitions, joints, and installation all contribute to the finished appearance.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose experience in stonecraft spans more than two decades. His work has included residential projects as well as restaurants and private galleries, treating material selection and installation as connected stages of the same process.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Morris County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Morris County, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Morristown</span>
              <span>◆ Morris Township</span>
              <span>◆ Morris Plains</span>
              <span>◆ Madison</span>
              <span>◆ Chatham</span>
              <span>◆ Chatham Township</span>
              <span>◆ Florham Park</span>
              <span>◆ Mendham</span>
              <span>◆ Mendham Township</span>
              <span>◆ Harding Township</span>
              <span>◆ Mountain Lakes</span>
              <span>◆ Montville</span>
              <span>◆ Boonton</span>
              <span>◆ Denville</span>
              <span>◆ Parsippany-Troy Hills</span>
              <span>◆ Randolph</span>
              <span>◆ Chester</span>
              <span>◆ Chester Township</span>
              <span>◆ Rockaway</span>
              <span>◆ Rockaway Township</span>
              <span>◆ Kinnelon</span>
            </div>
            <p className="font-sans mt-6 text-xs leading-relaxed text-neutral-600">
              Our Wayne location allows us to work with clients throughout Morris County while maintaining a personalized process for material selection and project planning.
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What tile and stone services are available in Morris County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ works with clients on natural stone selection, countertops, islands, vanities, fireplaces, feature walls, backsplashes, tile applications, and custom stone installations.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What types of stone do you work with?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Our selection includes marble, quartzite, travertine, onyx, and natural stone slabs. Specific material availability depends on the project.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can natural stone be used for a kitchen island?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Natural stone can be used for kitchen islands, although the appropriate material should be selected based on the intended use, maintenance expectations, fabrication requirements, and desired appearance.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What makes book-matched stone different?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Book-matched stone uses complementary slabs to create a mirrored visual relationship between their natural patterns. It is particularly effective when the stone has strong veining or movement.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can you coordinate tile with a stone countertop?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Tile can be selected to complement a countertop through color, texture, scale, pattern, or finish. Considering both materials together can help create a more cohesive kitchen or bathroom.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Do you serve areas beyond Morris County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Tiles & Stones NJ also serves Wayne, Passaic County, Bergen County, and Essex County, in addition to Morris County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Start Your Morris County Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            A well-designed tile or stone surface begins with understanding the material and where it will be used.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            If you're planning a kitchen renovation, bathroom, fireplace, feature wall, new construction project, or custom interior in Morris County, NJ, Tiles & Stones NJ can help you explore materials and develop a surface solution appropriate to the space.
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

export default MasonryServicesMorrisCountyNj;