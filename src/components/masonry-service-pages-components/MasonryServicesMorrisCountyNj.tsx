import Link from "next/link";

const MasonryServicesMorrisCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Affordable Masonry Services in <span className="text-caramel">Morris County, NJ</span> | Expert Masonry Contractor
          </h1>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Affordable masonry services should not mean cutting corners on materials, preparation, or workmanship. For homeowners, property managers, and commercial property owners in Morris County, NJ, the right masonry contractor should identify the cause of deterioration, recommend practical repairs, and use materials suited to the existing structure.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Masonry services can include brick repair, stonework, mortar repointing, chimney repairs, facade restoration, masonry replacement, and other exterior work. For older properties, careful material selection is especially important because modern repair materials may not always be compatible with historic masonry.
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
              alt="Practical Masonry Services for Morris County Properties"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Practical Masonry Services for Morris County Properties
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Masonry damage can begin as a relatively small issue and become more extensive when moisture enters cracks or deteriorated joints. Common signs that masonry needs attention include cracked bricks, loose or displaced stones, crumbling mortar, spalling surfaces, staining, and recurring water intrusion.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Depending on the condition of the property, masonry work may include:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Brick and stone repair",
                "Mortar repointing",
                "Masonry restoration",
                "Chimney repair",
                "Facade and exterior wall repairs",
                "Masonry replacement",
                "Stone installation and repair",
                "Retaining wall masonry",
                "Moisture-related masonry repairs",
                "Decorative masonry restoration",
              ].map((service, index) => (
                <div key={index} className="font-sans flex items-start gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700 sm:text-base">
                  <span className="text-caramel mt-0.5">◆</span>
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
            <p className="font-sans mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              An appropriate repair plan should address both the visible damage and the conditions contributing to it.
            </p>
          </div>

        </div>
      </section>

      {/* Custom Applications Grid */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Brick Repair and Mortar Repointing
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Brick repair and repointing are different services. Brick repair addresses damaged or deteriorated masonry units, while repointing replaces failing mortar within masonry joints.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Mortar Compatibility</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                The correct mortar is particularly important for older buildings. An incompatible or overly hard mortar can contribute to deterioration rather than preventing it.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Material Assessment</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Existing brick, stone, mortar, exposure, and previous repairs should be carefully considered before selecting replacement materials.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Condition Documentation</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                For significant restoration projects, documenting existing conditions before work begins can help establish a clear and effective repair strategy.
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
              Morris County has an established historic preservation program and maintains information about historic sites and resources throughout the county, supported by the Morris County Historic Preservation Trust Fund.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">State & National Registers</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                The New Jersey Historic Preservation Office maintains county-specific listings of properties and historic districts associated with the New Jersey and National Registers. Local-only designations may also apply.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Verify Requirements</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Before modifying masonry on a historic property, owners should determine whether local, state, or other preservation requirements govern the proposed exterior work.
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
              How to Find an Affordable Masonry Contractor
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              The lowest estimate is not necessarily the most economical choice. A useful masonry proposal should explain what is damaged, what work is recommended, which materials will be used, and what preparation is required.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Clear answers help property owners compare proposals based on scope and long-term suitability rather than price alone.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Important Contractor Questions</h3>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm text-neutral-700">
              <span>◆ What is causing the masonry problem?</span>
              <span>◆ Can the existing material be repaired?</span>
              <span>◆ What mortar or replacement material is recommended?</span>
              <span>◆ How will water infiltration be addressed?</span>
              <span>◆ Is the proposed work appropriate for an older building?</span>
              <span>◆ Are permits or preservation approvals required?</span>
              <span>◆ What exactly is included in the estimate?</span>
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What does a masonry contractor do?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                A masonry contractor can repair, restore, replace, or construct brick, stone, mortar, concrete masonry, chimneys, walls, facades, and other masonry elements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What are common masonry problems in New Jersey?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Common problems include deteriorated mortar, cracked masonry, moisture intrusion, spalling, staining, displaced materials, and damage associated with repeated exposure to weather and temperature changes.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Is repointing cheaper than replacing brick?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                It can be less extensive when the brick itself remains serviceable and the primary problem is deteriorated mortar. The appropriate repair depends on the condition of both the masonry units and joints.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How can I keep masonry repair costs under control?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Start with an accurate assessment and prioritize repairs based on condition and risk. Addressing water intrusion and deteriorated joints early may help prevent more extensive repairs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Is historic masonry repair different from standard masonry repair?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Historic masonry often requires greater attention to original materials, mortar compatibility, architectural details, and applicable preservation requirements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Does Morris County have historic preservation resources?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Morris County provides historic preservation resources and maintains information about historic properties throughout the county. Its Preservation Trust Fund supports eligible preservation projects.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Should water infiltration be fixed before masonry repairs?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                The source of water should be identified as part of the repair assessment. Repairing damaged masonry without addressing an ongoing moisture problem may allow deterioration to continue.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How do I compare masonry contractor estimates?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Compare the scope of work, materials, preparation, repair methods, exclusions, and any required permits or professional services. A detailed proposal is more useful than comparing the final price alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Affordable Masonry Services in Morris County, NJ
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Professional masonry restoration should address the source of deterioration while using materials suited to the existing structure.
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

export default MasonryServicesMorrisCountyNj;