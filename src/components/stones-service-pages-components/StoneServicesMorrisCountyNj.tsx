import Link from "next/link";

const StoneServicesMorrisCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile & Stone Services in <span className="text-caramel">Morris County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Custom Tile & Stone for Morris County, NJ
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            The right surface can change the way an entire room is experienced. In Morris County, where homes range from historic properties and established neighborhoods to new construction and highly customized residences, tile and stone can play an important role in defining the architecture.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <Link href="/" className="text-caramel underline transition-colors hover:opacity-80">
    Tiles & Stones
  </Link> NJ works with homeowners, architects, interior designers, and builders throughout Morris County, NJ, providing thoughtfully selected tile and natural stone for kitchens, bathrooms, fireplaces, feature walls, and other interior applications.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Based in Wayne, our approach is centered on the material itself. We look closely at color, texture, scale, veining, movement, and finish before determining how a material should be incorporated into the space. The result is a more deliberate relationship between the surface and the architecture surrounding it.
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
                className="px-4 py-2 bg-theme-cream text-caramel shadow-sm border border-caramel rounded-sm transition-colors"
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

      {/* Main Material Selection Section */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/f1.webp"
              alt="Custom Tile and Stone Selection in Morris County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Stone Selected for the Individual Project: Every Slab Has Its Own Character
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Natural stone is inherently varied. A slab can contain subtle tonal changes, dramatic veins, mineral formations, or patterns that become more pronounced as the material is viewed at full scale.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Instead of selecting a stone solely from a small sample, we consider how the complete slab will read within the room. We look at the intended application, available dimensions, orientation, surrounding finishes, and the visual direction of the material.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Where the stone will be installed",
                "How frequently the surface will be used",
                "Natural pattern and variation",
                "Slab size and thickness",
                "Finish and texture",
                "Maintenance requirements",
                "Lighting conditions",
                "Adjacent materials",
                "Seam and joint placement",
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
              From residential kitchens and bathrooms to feature walls and architectural focal points, explore our comprehensive stone applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* Kitchen Surfaces */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Kitchen Surfaces</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Countertops, Islands & Backsplashes. A dramatic quartzite can become the centerpiece of an island, while marble adds a refined quality. We consider the entire composition rather than treating each surface as a separate decision.
              </p>
            </div>

            {/* Bathroom Tile & Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Bathroom Tile & Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                From Quiet Retreats to Statement Bathrooms. A carefully selected material can continue from a vanity into a backsplash or coordinate with shower walls, niches, and floors to create a cohesive appearance.
              </p>
            </div>

            {/* Fireplaces & Feature Walls */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Fireplaces & Feature Walls</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Give the Architecture a Focal Point. Strong veining can be positioned to emphasize fireplace proportions, or full-height installations can allow a slab's natural movement to remain uninterrupted.
              </p>
            </div>

            {/* Book-Matched Stone */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Book-Matched Stone</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Natural Pattern as a Visual Composition. Book-matching places complementary slabs opposite one another so their patterns create a mirrored relationship across walls, islands, and architectural focal points.
              </p>
            </div>

            {/* Tile With a Purpose */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Tile With a Purpose</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tile can establish a completely different visual language depending on its size, shape, texture, finish, and installation pattern, providing a restrained background or establishing continuity.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Craftsmanship Built Around</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Good stonework requires an understanding of how the material should be handled and preserved through fabrication and precise installation, ensuring a respectful approach to the stone's character.
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

      {/* Craftsmanship & Morris County Communities */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Craftsmanship Built Around the Material: More Than Installation
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Good stonework is not only about putting material into place. It requires an understanding of how the material should be handled and how its natural characteristics can be preserved through fabrication and installation.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Tiles & Stones NJ was founded by Dan Kush, whose stonecraft experience spans more than two decades. His work has included residences, restaurants, and private galleries, providing a broad foundation in working with stone across different environments.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Serving Morris County Communities</h3>
            <p className="font-sans mb-4 text-sm leading-relaxed text-neutral-700">
              From our Wayne base, we serve clients throughout Morris County, New Jersey, including:
            </p>
            <div className="grid grid-cols-2 gap-2 font-sans text-sm text-neutral-700 sm:grid-cols-3">
              <span>◆ Morristown</span>
              <span>◆ Madison</span>
              <span>◆ Chatham</span>
              <span>◆ Chatham Twp</span>
              <span>◆ Mendham</span>
              <span>◆ Mendham Twp</span>
              <span>◆ Morris Twp</span>
              <span>◆ Morris Plains</span>
              <span>◆ Florham Park</span>
              <span>◆ Summit</span>
              <span>◆ Mountain Lakes</span>
              <span>◆ Montville</span>
              <span>◆ Boonton</span>
              <span>◆ Denville</span>
              <span>◆ Parsippany-Troy Hills</span>
              <span>◆ Randolph</span>
              <span>◆ Chester</span>
              <span>◆ Chester Twp</span>
              <span>◆ Harding Twp</span>
              <span>◆ Kinnelon</span>
              <span>◆ Rockaway</span>
              <span>◆ Rockaway Twp</span>
              <span>◆ Bernardsville</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Begin Your Morris County Tile & Stone Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Planning a kitchen, bathroom, fireplace, feature wall, or custom interior in Morris County, NJ? Start by exploring the materials that could define your space.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            Tiles & Stones NJ brings together distinctive tile and natural stone with an experienced, detail-focused approach to selection and installation.
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

export default StoneServicesMorrisCountyNj;