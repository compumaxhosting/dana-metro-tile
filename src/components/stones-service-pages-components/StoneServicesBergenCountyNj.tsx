import Link from "next/link";

const StoneServicesBergenCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone in <span className="text-caramel">Bergen County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Surfaces With Character, Crafted for Distinctive Spaces
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Bergen County homes range from traditional estates and classic residences to highly contemporary interiors. Tiles & Stones NJ provides carefully considered tile and stone solutions for clients who want their surfaces to contribute something meaningful to the architecture—not simply fill a specification.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From our Wayne, NJ studio, we work with homeowners, designers, architects, and builders across Bergen County on custom interiors where material, proportion, and execution matter.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Whether the project calls for a quiet limestone-inspired palette, expressive marble, richly patterned quartzite, sculptural onyx, or a precisely arranged tile installation, our approach begins with understanding what the material can bring to the room.
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
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
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

      {/* Main Approach Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/f1.webp"
              alt="Tile and Stone Installation in Bergen County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              A Different Way to Approach Stone: The Material Shapes the Layout
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Natural stone carries variation that cannot be replicated from one piece to another. A vein may become the focal point of a wall. A change in tone may determine where a slab belongs. The direction of movement may influence the entire layout.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              We work with those characteristics rather than trying to make natural material appear uniform. Before installation, we consider how the stone will interact with the room's architecture, lighting, cabinetry, fixtures, flooring, and other finishes.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "The scale of the room",
                "Natural pattern and visual movement",
                "Available slab dimensions",
                "Surface finish",
                "Expected use",
                "Maintenance requirements",
                "Transitions between materials",
                "Joint placement",
                "Orientation and layout",
                "The relationship between multiple slabs",
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
              From high-impact kitchens and continuous bathrooms to statement fireplaces and book-matched feature walls.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchens */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Stone for Kitchens</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Countertops, islands, backsplashes, and walls need to work as one composition. Marble and quartzite introduce substantial visual movement, while restrained stones create quieter foundations.
              </p>
            </div>

            {/* Bathrooms */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathrooms With Continuity</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Walls, floors, shower surfaces, vanities, niches, and thresholds can be coordinated to create a unified environment ranging from serene to richly detailed.
              </p>
            </div>

            {/* Fireplaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Architectural Fireplaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Strong veining can be positioned to draw attention toward the firebox, while large-format stone reduces visual interruptions to highlight natural stone character.
              </p>
            </div>

            {/* Dramatic Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Dramatic Walls & Surfaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Feature walls, bars, and entry spaces showcase stone where natural variation becomes fully visible, leveraging onyx translucency or quartzite boldness.
              </p>
            </div>

            {/* Book-Matching */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">The Art of Book-Matching</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Arranging complementary slabs so their patterns create a mirrored composition, transforming veining into an intentional design feature across focal points.
              </p>
            </div>

            {/* Tile Finish */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile as an Architectural Finish</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tile establishes rhythm and texture, creating continuous backdrops, geometric patterns, or subtle contrasts against prominent stone surfaces.
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
              Stone Materials We Work With
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Hand-selected natural stones bringing elegance, durability, warmth, and impact to high-end interiors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Marble</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Brings an elegant sense of movement with individual variation ranging from delicate and subtle to bold and architectural.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Quartzite</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                An appealing option combining natural pattern and strong performance, suitable for understated interiors and statement applications.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Travertine</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Introduces warmer, more grounded quality with natural texture and tonal variation that softens contemporary spaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Onyx</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Chosen for maximum visual impact, distinctive coloration, and ability to transmit light for memorable installations.
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
              Experience That Shows in the Details
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ was established by Dan Kush, whose career in stonecraft spans more than 20 years. His experience includes residential environments as well as restaurants and private galleries, developing a practical understanding of how stone performs in different settings.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              That experience informs a detail-oriented process in which material selection and installation are closely connected, preserving the integrity of the material while achieving a clean result.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Bergen County, New Jersey</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              We work with clients throughout Bergen County, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Ridgewood</span>
              <span>◆ Franklin Lakes</span>
              <span>◆ Alpine</span>
              <span>◆ Saddle River</span>
              <span>◆ Upper Saddle River</span>
              <span>◆ Tenafly</span>
              <span>◆ Englewood</span>
              <span>◆ Englewood Cliffs</span>
              <span>◆ Paramus</span>
              <span>◆ Wyckoff</span>
              <span>◆ Glen Rock</span>
              <span>◆ Ho-Ho-Kus</span>
              <span>◆ Ramsey</span>
              <span>◆ Mahwah</span>
              <span>◆ Fort Lee</span>
              <span>◆ Closter</span>
              <span>◆ Cresskill</span>
              <span>◆ Allendale</span>
              <span>◆ Fair Lawn</span>
              <span>◆ Bergenfield</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Start With the Material
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            If you're planning a tile or stone project in Bergen County, NJ, begin by exploring the material possibilities. The right slab, tile, pattern, and layout can influence the entire character of a space.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            Tiles & Stones NJ can help you move from initial material ideas to a finished installation with greater clarity and intention.
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

export default StoneServicesBergenCountyNj;