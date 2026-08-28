import Link from "next/link";

const StoneServicesWayneCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Premium Stone Surfaces in <span className="text-caramel">Wayne, NJ</span> & Northern New Jersey
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Distinctive Natural Stone | Selection, Fabrication & Installation
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            At Tiles & Stones NJ, stone is more than a surface—it is a defining element of the space. Based in Wayne, NJ, we carefully source and select distinctive natural stone for residential and commercial projects throughout Passaic County, Bergen County, Morris County, and Essex County.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            From expressive marble and richly veined quartzite to warm travertine and dramatic onyx, every slab is considered for its natural character, movement, durability, and potential within the finished design. Our approach is material-first: we let the stone's natural beauty guide the layout, cuts, and overall application.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Whether you're creating a statement fireplace in Wayne, a custom kitchen in Bergen County, an elegant bathroom in Morris County, or a dramatic feature wall in Essex or Passaic County, we help you find stone that brings depth, character, and permanence to the space.
          </p>

          {/* Interactive County Navigation Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="font-sans mb-4 text-xs uppercase tracking-widest text-neutral-400">
              Select Your Service Area
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-sans text-xs sm:gap-4 sm:text-sm">
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
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Essex County, NJ
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Main Services List / Stone Sourcing & Selection */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/f1.webp"
              alt="Premium Natural Stone Surfaces in North Jersey"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Stone Sourcing & Selection: Selecting the Stone Comes First
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              The right stone begins with the right slab. Color is only one part of the decision. Natural veining, movement, scale, thickness, finish, durability, and the intended application all play a role in creating a successful installation.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              We take a careful, design-focused approach to stone selection, helping homeowners, architects, interior designers, and contractors identify materials that work with both the architecture and the vision for the space.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Marble",
                "Quartzite",
                "Travertine",
                "Onyx",
                "Natural stone slabs",
                "Large-format stone surfaces",
                "A range of colors, patterns, and finishes",
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

      {/* Additional Stone Applications Section */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Custom Architectural Stone Applications
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Explore our specialized stone installation services tailored for statement focal points, functional surfaces, and architectural artistry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Feature Walls & Fireplaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-4 text-2xl text-caramel sm:text-3xl">Feature Walls & Fireplaces</h3>
              <p className="font-sans mb-6 text-base leading-relaxed text-neutral-700">
                Make Stone the Focal Point. A well-selected slab can transform a wall or fireplace into the architectural centerpiece of a room. Large-scale stone installations allow natural veining and movement to become part of the design rather than simply covering a surface.
              </p>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                From full-height fireplace surrounds to dramatic feature walls, we help select stone with the scale, pattern, and character needed to create a sophisticated focal point.
              </p>
            </div>

            {/* Countertops & Vanities */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-4 text-2xl text-[#403c38] sm:text-3xl">Countertops & Vanities</h3>
              <p className="font-sans mb-6 text-base leading-relaxed text-neutral-700">
                Beauty Designed for Everyday Living. Stone countertops and vanities bring natural character to kitchens, bathrooms, powder rooms, bars, and other custom spaces. Marble and quartzite can provide an elegant combination of visual impact and lasting performance.
              </p>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                We look at the complete application—including stone characteristics, maintenance, edge details, proportions, and surrounding materials—to help create a finished surface that feels intentional from every angle.
              </p>
            </div>

            {/* Book-Matched Stone Surfaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-4 text-2xl text-[#403c38] sm:text-3xl">Book-Matched Stone Surfaces</h3>
              <p className="font-sans mb-4 text-base leading-relaxed text-neutral-700">
                When the Vein Becomes the Design. Book-matching allows two or more slabs to be positioned so their natural patterns mirror one another, creating a continuous visual composition.
              </p>
              <ul className="space-y-2 font-sans text-sm text-neutral-700 sm:text-base">
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Feature walls & Fireplaces</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Kitchen islands & Backsplashes</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Bathroom walls</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Bars and entertaining spaces</li>
              </ul>
            </div>

            {/* Stone Collection Overview */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-4 text-2xl text-caramel sm:text-3xl">Explore Our Stone Collection</h3>
              <p className="font-sans mb-4 text-base leading-relaxed text-neutral-700">
                From timeless <strong>Marble</strong> and durable <strong>Quartzite</strong> to warm <strong>Travertine</strong> and translucent <strong>Onyx</strong>, we help you discover natural stone slabs selected for their beauty, character, and architectural potential.
              </p>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Exceptional stone does not need to be forced into a design. Its natural movement, veining, color, and texture provide the starting point for the entire space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* County Service Areas */}
      <section className="px-4 py-16 sm:px-6 md:py-24 bg-neutral-100">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Serving Wayne & Surrounding New Jersey Counties
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ serves homeowners, designers, architects, and contractors seeking distinctive stone surfaces throughout Wayne and neighboring regions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-xl text-neutral-900">Passaic County</h3>
              <p className="font-sans text-sm text-neutral-700">Including Wayne, NJ and surrounding communities for residential and commercial stone installations.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-xl text-neutral-900">Bergen County</h3>
              <p className="font-sans text-sm text-neutral-700">Custom natural stone countertops, backsplashes, and architectural slabs for Bergen County properties.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-xl text-neutral-900">Morris County</h3>
              <p className="font-sans text-sm text-neutral-700">Elegant bathroom vanities, fireplace surrounds, and custom stone features throughout Morris County.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-xl text-neutral-900">Essex County</h3>
              <p className="font-sans text-sm text-neutral-700">Dramatic feature walls, book-matched installations, and premium stone surfaces across Essex County.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Begin Your Stone Selection
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Discover a stone that does more than finish the space—it becomes part of its identity. Contact Tiles & Stones NJ to discuss your next project.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            *Service availability may vary depending on project location and scope.
          </p>
          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center border border-caramel bg-caramel px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-transparent hover:text-white sm:w-auto sm:px-10"
          >
            Contact Tiles & Stones NJ
          </a>
        </div>
      </section>

    </div>
  );
};

export default StoneServicesWayneCountyNj;