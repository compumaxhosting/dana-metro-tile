import Link from "next/link";

const MasonryServicesBergenCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Bergen County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Distinctive Surfaces for Bergen County Homes & Interiors
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ works with homeowners, architects, designers, and builders throughout Bergen County, NJ, providing tile and stone solutions for kitchens, bathrooms, fireplaces, feature walls, and custom interiors.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From our Wayne, New Jersey location, we help clients evaluate materials based on the actual requirements of the project. Natural stone is not uniform by nature. Veining, color variation, texture, slab size, and finish can all influence how a surface ultimately looks.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Our role is to help connect those material characteristics with the architecture, function, and design direction of the space.
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
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
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
              alt="Stone Selection in Bergen County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Stone Selection That Starts With the Slab: Connecting Material to Architecture
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              A photograph or small sample can only show part of a natural stone's character. Once viewed at slab scale, patterns and movement may become much more pronounced.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              For that reason, stone selection deserves careful consideration before fabrication, ensuring every surface aligns seamlessly with the architecture and design direction.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Natural veining and movement",
                "Color and tonal variation",
                "Slab dimensions and scale",
                "Surface finish options",
                "Intended application",
                "Maintenance requirements",
                "Lighting conditions",
                "Surrounding materials",
                "Seam placement and layout",
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
              Custom Applications Across Bergen County
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Explore our range of custom tile and natural stone installations for kitchens, bathrooms, fireplaces, and feature walls.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchen Countertops & Islands */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchen Countertops & Islands</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Make the main surface part of the design. Quartzite provides bold natural movement while marble introduces classic character, unified with proper slab orientation.
              </p>
            </div>

            {/* Bathrooms & Vanities */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathrooms & Vanities</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Coordinate the details. Connect vanity tops, shower walls, benches, and feature areas with tile to establish a balanced, harmonious material palette.
              </p>
            </div>

            {/* Fireplaces & Feature Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Feature Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Give a room a defining element. Showcase large-format stone and veining orientation or explore patterned tile options that complement surrounding architecture.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A mirrored approach to natural veining. Position complementary slabs side by side to turn fireplaces, feature walls, and islands into distinctive design centerpieces.
              </p>
            </div>

            {/* Tile for Interiors */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile Applications</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Provide flexibility across floors, walls, showers, backsplashes, and entries using varied sizes, finishes, and installation patterns to alter room scale.
              </p>
            </div>

            {/* Detail-Oriented Craftsmanship */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Detail-Oriented Craft</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Founded by Dan Kush with over two decades of experience, treating material selection and execution as connected, precision-driven stages.
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
                Valued for natural veining and variation, bringing an elegant quality to countertops, vanities, fireplaces, walls, and other interior applications.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Offers a combination of natural pattern and durability suitable for demanding architectural applications, with appearances varying across slabs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Features a naturally textured, warm appearance with organic variation that works exceptionally well in classic and contemporary spaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Known for distinctive patterns and translucency, highly effective where the stone serves as a striking visual centerpiece or illuminated feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Bergen County Communities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Detail-Oriented Craftsmanship: Founded by Dan Kush
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              The quality of a finished tile or stone installation depends on more than the material. Layout, preparation, cuts, transitions, joints, and installation all affect the final appearance.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose stonecraft background spans more than two decades and includes residential projects, restaurants, and private galleries, supporting a hands-on execution process.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Bergen County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Bergen County, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Ridgewood</span>
              <span>◆ Paramus</span>
              <span>◆ Franklin Lakes</span>
              <span>◆ Wyckoff</span>
              <span>◆ Glen Rock</span>
              <span>◆ Ho-Ho-Kus</span>
              <span>◆ Saddle River</span>
              <span>◆ Upper Saddle River</span>
              <span>◆ Tenafly</span>
              <span>◆ Englewood</span>
              <span>◆ Englewood Cliffs</span>
              <span>◆ Fort Lee</span>
              <span>◆ Closter</span>
              <span>◆ Cresskill</span>
              <span>◆ Ramsey</span>
              <span>◆ Mahwah</span>
              <span>◆ Allendale</span>
              <span>◆ Fair Lawn</span>
              <span>◆ Bergenfield</span>
            </div>
            <p className="font-sans mt-6 text-xs leading-relaxed text-neutral-600">
              Our Wayne location provides convenient access to Bergen County while allowing projects to be handled with a personalized approach to material review and planning.
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What tile and stone services do you provide in Bergen County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ works with clients on stone selection, countertops, islands, vanities, fireplaces, feature walls, backsplashes, tile installations, and custom stone applications.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Which natural stones can I choose from?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Options include marble, quartzite, travertine, onyx, and other natural stone slabs. Availability and suitability depend on the individual project.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can you help select a slab for a specific room?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Slab selection can take into account the room's dimensions, intended application, surrounding finishes, natural pattern, slab size, and desired visual effect.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is book-matched stone?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Book-matched stone uses complementary slabs arranged so their natural patterns create a mirrored appearance. It is often used for prominent surfaces such as fireplaces, feature walls, and kitchen islands.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can tile and natural stone be used together?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Tile and stone can be combined effectively when their colors, textures, proportions, and patterns are considered as part of the same design.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Do you serve communities outside Bergen County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Tiles & Stones NJ also serves clients in Wayne, Passaic County, Morris County, and Essex County, in addition to Bergen County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Begin Your Bergen County Tile & Stone Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            The right surface can influence the character of an entire room. By considering material, application, layout, and craftsmanship together, a tile or stone installation can become an integrated part of the architecture.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            For kitchens, bathrooms, fireplaces, feature walls, and custom interiors in Bergen County, NJ, Tiles & Stones NJ offers a material-focused approach from selection through installation.
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

export default MasonryServicesBergenCountyNj;