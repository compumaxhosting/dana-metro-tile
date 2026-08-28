import Link from "next/link";

const MasonryServicesEssexCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Essex County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Custom Tile & Stone for Essex County Homes & Commercial Spaces
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ helps homeowners, architects, interior designers, and builders throughout Essex County, NJ bring distinctive tile and natural stone into thoughtfully designed spaces.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From our Wayne location, we work on kitchens, bathrooms, fireplaces, feature walls, countertops, vanities, and other custom applications. Every project has different requirements, so material selection begins with the space itself: how it will be used, what surrounds it, how much visual attention the surface should command, and how the material's natural characteristics can be incorporated into the design.
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
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Morris County, NJ
              </Link>
              <Link 
                href="/services/masonry/essex-county-nj"
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
              src="/images/a1.webp"
              alt="Custom Tile and Stone Selection in Essex County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Choosing Materials That Work in the Space: No Two Slabs Are Alike
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Natural stone is valued partly because no two slabs are exactly alike. Variations in veining, mineral content, color, and movement can become important design considerations once the material is viewed at full scale.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Before a stone is selected, we carefully evaluate the environment, layout, and composition to ensure harmonious integration with your architecture.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Intended use and location",
                "Natural pattern and movement",
                "Color and tonal variation",
                "Slab dimensions and thickness",
                "Surface finish options",
                "Maintenance expectations",
                "Lighting conditions",
                "Adjacent tile and finishes",
                "Seams and overall layout",
                "Architectural proportions",
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
              From kitchen countertops and bathroom vanities to architectural fireplaces, feature walls, and book-matched surfaces.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchen Countertops & Islands */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchen Countertops & Islands</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Make the countertop part of the composition. A strongly veined quartzite creates a focal point around an island, while marble provides a classic material presence.
              </p>
            </div>

            {/* Bathroom Surfaces & Vanities */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathroom Surfaces & Vanities</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Coordinate more than one surface. Connect flooring, shower walls, vanities, niches, and backsplashes through harmonious color, scale, and texture.
              </p>
            </div>

            {/* Fireplaces That Define a Room */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Focal Points</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Highlight the natural character of stone. Use large-format slabs to showcase natural movement without unnecessary interruptions across living spaces.
              </p>
            </div>

            {/* Feature Walls & Statement Surfaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Feature Walls & Statements</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Allow materials room to breathe. Display full slab movement or structured tile patterns across entryways, dining areas, and custom bars.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Create continuity from natural veining. Arrange complementary slabs to create mirrored relationships on prominent walls, islands, and fireplaces.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Precision Craftsmanship</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Backed by two decades of stonecraft experience by Dan Kush, ensuring exact measurements, careful fabrication, and seamless installation.
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
                Recognized for individual veining and broad variation, providing sophisticated surfaces for countertops, vanities, fireplaces, and walls.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Provides natural pattern and movement, often selected for surfaces where high durability is combined with striking visual elegance.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Offers natural texture and warm variation, working seamlessly across both traditional interiors and organic contemporary designs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Stands apart for distinctive patterns and translucent qualities, ideal for statement feature walls, custom bars, vanities, and specialized accents.
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
              Craftsmanship Behind the Finished Surface: Founded by Dan Kush
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Material selection is only one part of a successful installation. Accurate measurement, fabrication, layout, joints, transitions, and installation details all affect the final appearance.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose experience in stonecraft spans more than two decades. His background includes residential work as well as projects involving restaurants and private galleries, supporting a hands-on process focused on respecting the material.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Essex County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Essex County, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Montclair</span>
              <span>◆ Short Hills</span>
              <span>◆ Maplewood</span>
              <span>◆ South Orange</span>
              <span>◆ West Orange</span>
              <span>◆ Livingston</span>
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
            <p className="font-sans mt-6 text-xs leading-relaxed text-neutral-600">
              Our Wayne location provides access to projects throughout Essex County while allowing us to maintain a personalized process for material selection and project planning.
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What tile and stone services are available in Essex County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ works with clients on stone selection, countertops, islands, vanities, fireplaces, feature walls, backsplashes, tile installations, and custom stone applications.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Which natural stone materials do you offer?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Our collection includes marble, quartzite, travertine, onyx, and natural stone slabs. Material availability can vary according to the project and current selection.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can you help choose stone for a specific application?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Stone can be evaluated according to its appearance, intended use, maintenance considerations, dimensions, finish, and relationship to other materials in the space.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is book-matched stone used for?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Book-matched stone is commonly considered for visually prominent applications such as fireplaces, feature walls, kitchen islands, backsplashes, bathroom walls, and custom bars.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can tile and stone be combined?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Combining tile and natural stone can add hierarchy and contrast to an interior. The materials should be selected with attention to their colors, textures, proportions, and patterns.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Do you work throughout Essex County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Tiles & Stones NJ serves clients throughout Essex County as well as Wayne, Passaic County, Bergen County, and Morris County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Start Your Essex County Tile & Stone Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            A successful surface begins with the right material and a clear understanding of how it will be used.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            If you're planning a kitchen, bathroom, fireplace, feature wall, renovation, or custom interior in Essex County, NJ, Tiles & Stones NJ can help you explore tile and stone options suited to the project's design and practical requirements.
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

export default MasonryServicesEssexCountyNj;