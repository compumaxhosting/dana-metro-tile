import Link from "next/link";

const MasonryServicesEssexCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Residential and Commercial Masonry Services in <span className="text-caramel">Essex County, NJ</span>
          </h1>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Residential and commercial masonry services in Essex County, NJ, cover the repair, restoration, replacement, and construction of brick, stone, mortar, concrete masonry, chimneys, walls, facades, and other masonry features. The appropriate solution depends on the material, extent of deterioration, exposure to moisture, and the condition of the surrounding structure.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            For property owners, the priority should be more than improving appearance. Proper masonry work should address the underlying cause of deterioration while preserving sound materials whenever practical.
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
              alt="Masonry Services for Residential Properties in Essex County NJ"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Masonry Services for Residential Properties
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Residential masonry can experience damage from weather exposure, moisture, movement, aging mortar, impact, and poor previous repairs. Early evaluation can help determine whether a problem requires localized maintenance or more extensive restoration.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Residential masonry services may include:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Brick and stone repair",
                "Mortar repointing",
                "Chimney masonry repair",
                "Exterior wall repairs",
                "Stone veneer repair",
                "Masonry replacement",
                "Patio and walkway masonry",
                "Retaining wall repairs",
                "Decorative masonry work",
                "Water-related masonry repairs",
              ].map((service, index) => (
                <div key={index} className="font-sans flex items-start gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700 sm:text-base">
                  <span className="text-caramel mt-0.5">◆</span>
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
            <p className="font-sans mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A repair should be matched to the existing construction rather than treated as a one-size-fits-all project.
            </p>
          </div>

        </div>
      </section>

      {/* Custom Applications Grid */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Commercial Masonry Repair and Restoration
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Commercial buildings often require masonry work that considers appearance, durability, access, occupant safety, and project coordination. Deteriorated brick, failing mortar joints, cracks, damaged stone, and facade issues should be evaluated before repairs are selected.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Building Facade Repairs</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Restore structural integrity and exterior presentation for commercial facades, storefronts, and multi-story structures.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Brick Replacement</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Swap out severely cracked, spalled, or structurally compromised bricks with accurately matched replacement units.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Stone Restoration</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Carefully restore architectural stone details, sills, lintels, and decorative masonry features on commercial properties.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-[#403c38]">Repointing & Joint Repair</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Remove failing mortar and install strong, compatible replacement mortar to protect against moisture penetration.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Wall Rehabilitation</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Comprehensive evaluation and structural rehabilitation of masonry walls experiencing shifting or load-bearing issues.
              </p>
            </div>

            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-caramel">Parapet & Chimney Work</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Address vulnerable roofline elements including parapets, copings, and commercial chimneys exposed to severe weather.
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
              Brick Repair vs. Repointing: What's the Difference?
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Brick repair and mortar repointing address different problems. Brick repair or replacement is appropriate when individual masonry units are cracked, spalled, severely deteriorated, or otherwise unsuitable for continued use. Repointing involves removing deteriorated mortar from masonry joints and installing compatible new mortar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 shadow-sm border-t-4 border-caramel">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Material Compatibility Matters</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Particularly on older buildings, replacement mortar should be selected with consideration for the existing brick or stone and the construction of the building. Using an excessively hard or incompatible repair material can create additional deterioration.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-3 text-2xl text-neutral-900">Addressing Moisture Early</h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-700">
                Water is a common contributor to masonry deterioration. Cracked joints, failed sealants, damaged flashing, and other building-envelope problems can allow moisture to reach protected areas. Proper assessment considers drainage and moisture pathways before repairs are completed.
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
              Choosing a Masonry Contractor in Essex County
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              When comparing masonry contractors, look beyond the estimate. Ask for a clear description of the proposed repair, materials, preparation, and exclusions to ensure you understand what you are paying for.
            </p>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              A detailed scope makes it easier to compare different proposals fairly and select a reliable professional for your property.
            </p>
          </div>

          <div className="bg-theme-cream p-6 sm:p-8 lg:p-10 border-l-4 border-caramel shadow-sm">
            <h3 className="text-font-cormorant mb-4 text-2xl text-neutral-900 sm:text-3xl">Important Contractor Questions</h3>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm text-neutral-700">
              <span>◆ What caused the masonry deterioration?</span>
              <span>◆ Which areas actually need repair or replacement?</span>
              <span>◆ What materials will be used?</span>
              <span>◆ Will existing masonry be preserved where practical?</span>
              <span>◆ How will moisture-related issues be addressed?</span>
              <span>◆ Is the property historic or subject to preservation requirements?</span>
              <span>◆ What work is included in the written proposal?</span>
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
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What masonry services are available for homes in Essex County?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Residential masonry work can include brick and stone repair, repointing, chimney repairs, retaining walls, patios, walkways, exterior walls, and masonry restoration.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What commercial masonry problems should be inspected?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Common concerns include deteriorated mortar, cracked or displaced masonry, damaged facade materials, water intrusion, spalling, and deterioration around parapets or other exposed areas.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">When does brick need to be replaced?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Replacement may be considered when a brick is severely cracked, spalled, structurally compromised, or too deteriorated to provide a suitable surface for repair.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">What is masonry repointing?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Repointing is the process of removing deteriorated mortar from masonry joints and replacing it with new mortar selected to be compatible with the existing construction.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Can masonry repairs help with water intrusion?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                They can address damaged joints, cracks, and other masonry-related pathways for water, but the source of moisture should be identified rather than assuming the masonry surface is the only cause.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">Are historic buildings different to repair?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Often, yes. Historic masonry may require additional attention to original materials, mortar compatibility, architectural details, and applicable local or state preservation requirements.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-caramel">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">How should I compare masonry estimates?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Compare the repair scope, materials, preparation, access requirements, exclusions, and proposed methods rather than choosing solely on the lowest price.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant text-xl text-neutral-900 mb-2">When should a masonry contractor inspect a property?</h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                Consider an inspection when you notice loose masonry, significant cracks, crumbling mortar, spalling, recurring water entry, or visible changes in a wall or chimney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Residential & Commercial Masonry in Essex County, NJ
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Professional masonry work addresses the underlying cause of deterioration while preserving sound materials.
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

export default MasonryServicesEssexCountyNj;