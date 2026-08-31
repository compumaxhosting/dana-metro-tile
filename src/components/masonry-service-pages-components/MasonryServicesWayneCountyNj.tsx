import Link from "next/link";

const MasonryServicesWayneCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Custom Masonry in <span className="text-caramel">Wayne, NJ & Northern New Jersey</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Built Around Material, Detail, and Craft
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Masonry gives architecture a sense of permanence. Stone walls, fireplaces, architectural features, and carefully constructed masonry details can add texture and substance to both contemporary and traditional spaces.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
              Tiles & Stones
            </Link> NJ provides custom masonry services in Wayne, NJ, with projects extending throughout Passaic County, Bergen County, Morris County, and Essex County. Our work is suited to homeowners, architects, interior designers, builders, and clients developing distinctive residential or select commercial spaces.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            The process begins with the character of the material and the requirements of the space. From there, proportions, placement, transitions, and finishing details are considered to create masonry that feels purposeful within the architecture.
          </p>

          {/* Interactive Service Area Navigation Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="font-sans mb-4 text-xs uppercase tracking-widest text-neutral-400">
              Select Your Service Area
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-sans text-xs sm:gap-4 sm:text-sm">
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
              alt="Custom Masonry Detailing and Craft in Wayne NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Custom Masonry Detailing: Where Small Choices Shape the Final Look
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Masonry is often defined by details that may seem small but have a significant effect on the finished appearance. The arrangement of individual units, joint treatment, edges, transitions, corners, and connections with adjacent materials all contribute to the overall composition.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              For custom work, these elements are considered as part of the design rather than left to the final stage of construction. This approach is especially useful when masonry is intended to be a prominent architectural feature rather than simply a functional surface.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Arrangement of individual units",
                "Joint treatment and profile",
                "Edges and clean transitions",
                "Corner detailing and alignment",
                "Connections with adjacent materials",
                "Substrate and surface preparation",
                "Proportion and scale matching",
                "Structural load considerations",
                "Weather and exposure planning",
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
              Custom Applications Across Wayne & Northern New Jersey
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              From interior fireplaces and feature walls to exterior architectural elements, explore our comprehensive masonry solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Fireplaces & Interior Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Fireplaces & Interior Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A fireplace can provide a natural focal point for a living room, family room, library, or entertaining area, carrying visual weight while introducing texture and permanence.
              </p>
            </div>

            {/* Exterior Masonry & Architectural Features */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Exterior Masonry & Features</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Extend masonry beyond the interior to create a stronger relationship with your landscape, including architectural walls, entry elements, terraces, and site-specific construction.
              </p>
            </div>

            {/* A Material-First Approach */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">A Material-First Approach</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Natural stone varies in color, texture, and pattern. Rather than trying to eliminate these differences, a thoughtful masonry design uses them to its full advantage.
              </p>
            </div>

            {/* Craftsmanship From Start to Finish */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Craftsmanship From Start to Finish</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Masonry demands patience and accuracy. Success depends on preparation, alignment, proportion, placement, finishing, and attention to individual elements.
              </p>
            </div>

            {/* Masonry for Living Spaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchens & Living Spaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Masonry does not have to dominate a room to make an impact. A stone element can frame a kitchen, define a transition, or add texture to a minimal interior.
              </p>
            </div>

            {/* Planning & Execution */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Guided Planning</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Projects are personally guided from the material selection stage through completion, with an emphasis on preserving material character and installation detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masonry Types Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Interior & Exterior Masonry Applications
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Discover how custom stonework and structured masonry can elevate your residential or commercial space.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Feature Walls</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Create striking visual backdrops for living areas, entryways, and custom commercial interiors using carefully matched stone units.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Fireplace Surrounds</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Anchor rooms with timeless stone hearths and floor-to-ceiling masonry designed to complement your room's exact proportions.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Architectural Accents</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Incorporate structural and decorative stonework that adds substance, character, and permanence to your property's architecture.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Outdoor Elements</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Extend your design outdoors with durable masonry terraces, entry columns, and landscape walls built to withstand regional elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Service Areas */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Two Decades of Stonecraft Experience: Founded by Dan Kush
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Good stonework is not only about putting material into place. It requires an understanding of how the material should be handled and how its natural characteristics can be preserved through fabrication and installation.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose stonecraft experience spans more than two decades. His background includes residential projects, restaurants, and private galleries, contributing to a hands-on approach centered on careful material selection and precise execution.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Northern New Jersey</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Northern New Jersey, including:
            </p>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-2">
              <span>◆ Wayne, NJ (Home Base)</span>
              <span>◆ Passaic County, NJ</span>
              <span>◆ Bergen County, NJ</span>
              <span>◆ Morris County, NJ</span>
              <span>◆ Essex County, NJ</span>
              <span>◆ Surrounding Communities</span>
            </div>
            <p className="font-sans mt-6 text-xs leading-relaxed text-neutral-600">
              This service area allows us to work with a variety of architectural settings, from individual residential renovations to larger custom interiors and select commercial projects.
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is custom masonry?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Custom masonry is masonry designed around the specific requirements of a property, room, structure, or architectural feature. It can involve unique layouts, stone selection, fireplaces, walls, architectural details, and site-specific installations.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What can masonry be used for inside a home?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Interior masonry can be used for fireplaces, feature walls, entry details, accent structures, and other architectural elements. The appropriate application depends on the material, construction, and design of the space.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can masonry be used outdoors?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Masonry can be incorporated into exterior walls, architectural features, terraces, entrances, and other outdoor applications. Exterior projects need to account for weather exposure, drainage, substrate conditions, and suitable installation methods.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What materials can be used for custom masonry?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Material selection depends on the application and design requirements. Natural stone is one option, but the appropriate material should be evaluated based on location, exposure, construction method, appearance, and long-term performance.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">When should masonry be planned during a renovation?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Ideally, masonry should be addressed during the design and planning stage. Early coordination makes it easier to resolve dimensions, substrates, surrounding finishes, structural requirements, and installation details.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Do you provide masonry services outside Wayne?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Tiles & Stones NJ serves clients in Wayne as well as Passaic, Bergen, Morris, and Essex Counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Custom Masonry With Purpose
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Good masonry should feel connected to its surroundings. The material, proportions, craftsmanship, and architectural details should work together rather than compete for attention.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            For a fireplace, feature wall, architectural stone element, or exterior masonry project, Tiles & Stones NJ brings a careful, material-conscious approach to projects throughout Wayne and surrounding Northern New Jersey communities.
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

export default MasonryServicesWayneCountyNj;