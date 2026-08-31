import Link from "next/link";

const MasonryServicesPassaicCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Expert Masonry Contractors Serving <span className="text-caramel">Passaic County, NJ</span>
          </h1>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Historic and older masonry properties require more than routine repairs. Brick, stone, mortar, and other masonry materials can deteriorate for different reasons, and the wrong repair approach can create additional problems. Professional masonry restoration should address the source of deterioration while preserving the property's appearance, character, and existing materials whenever practical.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            For property owners in Passaic County, NJ, masonry restoration can include brick repair, mortar repointing, stone restoration, chimney repairs, masonry replacement, and moisture-related repairs. For historically significant properties, the work may also need to account for local preservation requirements and the character of the original construction.
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
              alt="Masonry Restoration Services in Passaic County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Masonry Restoration for Historic and Older Properties
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Historic masonry restoration starts with understanding the condition of the existing structure. Cracked bricks, deteriorated mortar joints, water intrusion, spalling, staining, and displaced masonry can all indicate underlying problems that should be addressed before cosmetic repairs are performed.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Depending on the property, masonry restoration may include:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Brick and stone repair",
                "Mortar joint repointing",
                "Damaged masonry replacement",
                "Chimney and masonry structure repairs",
                "Crack and surface repairs",
                "Moisture and water-infiltration solutions",
                "Restoration of architectural masonry details",
                "Exterior masonry maintenance",
              ].map((service, index) => (
                <div key={index} className="font-sans flex items-start gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700 sm:text-base">
                  <span className="text-caramel mt-0.5">◆</span>
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
            <p className="font-sans mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              The appropriate repair method depends on the building's age, construction, materials, exposure, and existing condition.
            </p>
          </div>

        </div>
      </section>

      {/* Custom Applications Grid */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Why Mortar Compatibility Matters
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Repointing historic masonry is not simply a matter of filling damaged joints with new mortar. Older brick and stone buildings may have been constructed with mortar that has different strength, flexibility, and moisture characteristics from many modern products.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Incompatible Mortar Risks</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Using an overly hard or incompatible mortar can contribute to damage in some older masonry systems.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Careful Evaluation</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                A careful restoration approach evaluates the existing masonry and mortar before selecting replacement materials.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Protection & Appearance</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                The goal is to repair deteriorated joints while protecting the surrounding brick or stone and maintaining the appearance of the original construction.
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
              Historic Masonry Work in Passaic County
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Passaic County contains a variety of historic buildings, structures, sites, and districts. Some properties may be listed on state or national historic registers, while others may have local historic significance or additional preservation requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Before Making Changes</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Before making substantial exterior changes to an older or historically designated property, property owners should determine whether the building is subject to local preservation rules or other approval requirements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Preserving Character</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                This is especially important when work involves visible exterior masonry, architectural details, historic facades, or materials that contribute to a property's character.
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
              How to Choose a Masonry Contractor
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Choosing a contractor for an older or historic property requires more than comparing estimates. Ask potential contractors about their experience with existing masonry and how they plan to diagnose the cause of deterioration.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A detailed proposal should clearly explain the recommended repairs, materials, preparation work, and scope of the project.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Important Questions to Ask</h3>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm text-neutral-700">
              <span>◆ How will you evaluate the existing masonry?</span>
              <span>◆ What is causing the deterioration?</span>
              <span>◆ How will replacement mortar be selected?</span>
              <span>◆ Can damaged brick or stone be repaired instead of replaced?</span>
              <span>◆ What areas require immediate attention?</span>
              <span>◆ Will the proposed work affect a historic designation or district requirement?</span>
              <span>◆ Are permits, professional assessments, or preservation approvals necessary?</span>
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
                A masonry contractor works with materials such as brick, stone, concrete masonry, and mortar. Services can include construction, repair, repointing, restoration, replacement, and maintenance of masonry structures and surfaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Is historic masonry repair different from standard masonry repair?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Historic masonry work generally requires greater attention to existing materials, construction methods, appearance, and compatibility between old and new materials.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is masonry repointing?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Masonry repointing involves removing deteriorated mortar from masonry joints and installing new mortar. Proper repointing can help restore the performance and weather resistance of masonry joints.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How can I tell if my property is historically designated?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Property owners can check state and local historic-property records and contact the appropriate municipal preservation authority. A property may have local historic protections even when it is not listed on the National Register of Historic Places.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Does historic masonry always need to be replaced when it is damaged?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                No. Depending on the severity and type of deterioration, some masonry can potentially be repaired or retained rather than completely replaced. The appropriate solution requires an evaluation of the existing material and the cause of the damage.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can water cause masonry deterioration?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Yes. Water can contribute to mortar deterioration, freeze-thaw damage, staining, corrosion of embedded components, and other masonry problems. Identifying and correcting the source of moisture is often an important part of a durable repair.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What should I do before repairing an older masonry building?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Start by documenting visible damage and determining whether the property has historic-designation requirements. A qualified masonry professional can then evaluate the condition, identify likely causes of deterioration, and recommend appropriate repair methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Start Your Passaic County Masonry Project
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Professional masonry restoration addresses the source of deterioration while preserving your property's character.
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

export default MasonryServicesPassaicCountyNj;