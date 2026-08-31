import Link from "next/link";

const MasonryServicesBergenCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Best Masonry Contractor in <span className="text-caramel">Bergen County NJ</span> | Reliable Masonry Services
          </h1>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Finding the right masonry contractor in Bergen County, NJ means looking beyond price. Quality masonry work should address the condition of the existing structure, use appropriate materials, and provide a finished result that performs well in New Jersey's changing weather conditions.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Professional masonry services can include brick repair, stonework, repointing, masonry restoration, chimney work, retaining walls, and other exterior masonry projects. For older or historically significant buildings, the repair approach should also consider the original materials and architectural character.
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
              alt="Reliable Masonry Services in Bergen County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Reliable Masonry Services in Bergen County, NJ
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Masonry problems are often more than cosmetic. Cracked brick, deteriorated mortar, loose stone, water infiltration, spalling, and damaged joints can allow moisture to enter the building envelope and contribute to further deterioration.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A proper masonry assessment should identify visible damage and investigate what caused it. Depending on the property, recommended work may include:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Brick and stone repairs",
                "Mortar repointing",
                "Masonry restoration",
                "Chimney repair and rebuilding",
                "Facade repairs",
                "Retaining wall masonry",
                "Damaged masonry replacement",
                "Exterior moisture-related repairs",
                "Decorative and architectural masonry restoration",
              ].map((service, index) => (
                <div key={index} className="font-sans flex items-start gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700 sm:text-base">
                  <span className="text-caramel mt-0.5">◆</span>
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
            <p className="font-sans mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              The right solution depends on the type of masonry, age of the structure, extent of deterioration, exposure, and previous repairs.
            </p>
          </div>

        </div>
      </section>

      {/* Custom Applications Grid */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Brick and Stone Masonry Repair
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Brick and stone should not always be repaired in the same way. Different materials have different physical characteristics, and replacement materials should be selected with the existing construction in mind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Material Differences</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Different materials have unique physical characteristics requiring custom repair approaches tailored to the existing structure.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Mortar Repointing</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Involves removing deteriorated mortar from joints and installing new mortar. Compatibility is vital on older buildings to avoid material conflict.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Condition Documentation</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                For significant restoration projects, documenting existing conditions before work begins helps establish a clear, structured repair strategy.
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
              Masonry Restoration for Historic Properties
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Bergen County has a strong historic-preservation infrastructure, including county preservation resources and a Historic Preservation Advisory Board, along with trust fund support programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">State & National Registers</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                The New Jersey Historic Preservation Office maintains listings of properties and historic districts that have received formal state or national historic-register actions. Local designations may carry extra requirements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Check Before Altering</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                If a masonry project involves a historic property, verify the property's designation and applicable municipal requirements before beginning exterior alterations.
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
              How to Choose a Masonry Contractor
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Before hiring a contractor, ask for a clearly defined scope of work and practical answers regarding deterioration causes, repair feasibility, mortar selection, protection measures, and permits.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A detailed proposal makes it easier to compare contractors based on actual recommended work rather than price alone.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Key Contractor Questions</h3>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm text-neutral-700">
              <span>◆ What is causing the masonry deterioration?</span>
              <span>◆ Can the existing brick or stone be repaired?</span>
              <span>◆ What mortar and replacement materials will be used?</span>
              <span>◆ How will surrounding masonry be protected?</span>
              <span>◆ Are there drainage or moisture problems that need attention?</span>
              <span>◆ Does the property have historic-designation requirements?</span>
              <span>◆ Which permits or professional assessments may be required?</span>
            </div>
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What services does a masonry contractor provide?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Masonry contractors may provide brick and stone repair, repointing, restoration, chimney work, masonry construction, facade repairs, and other masonry-related services.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How do I know if my brickwork needs repair?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Common warning signs include cracked or loose bricks, crumbling mortar, open joints, spalling surfaces, water intrusion, leaning masonry, or areas that have visibly shifted.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is masonry repointing?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Repointing is the process of removing deteriorated mortar from masonry joints and replacing it with new mortar. Properly specified repointing can help protect masonry from weather and moisture penetration.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Is historic masonry restoration different from regular masonry repair?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Historic restoration typically places greater emphasis on preserving original materials, matching existing construction, and selecting repair methods that are compatible with the historic masonry.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How often should masonry be inspected?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                There is no single inspection interval that applies to every property. Older buildings, exposed masonry, chimneys, and structures with previous water problems may warrant more frequent visual inspections.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can cracked masonry be repaired without replacing the entire wall?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Sometimes. The appropriate solution depends on why the masonry cracked, how extensive the damage is, and whether the affected material remains structurally sound.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Does Bergen County have historic preservation resources?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Bergen County provides historic preservation resources, including programs supporting eligible preservation, stabilization, rehabilitation, and restoration projects.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Should I repair masonry before addressing water infiltration?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                The source of water should generally be investigated first. Repairing damaged masonry without addressing an active moisture source may allow deterioration to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Reliable Masonry Services in Bergen County, NJ
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Well-planned masonry maintenance and professional restoration solve underlying problems instead of simply covering visible defects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
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