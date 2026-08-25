import React from "react";
import Link from "next/link";

const TileServicesMorrisCountyNj = () => {
  return (
    <div className="bg-theme-cream min-h-screen text-neutral-800">
      
      {/* Hero Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-font-cormorant mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tile Installation, Repair & Remodeling in <span className="text-caramel">Morris County, NJ</span>
          </h1>
          <h2 className="text-font-cormorant mb-6 text-xl text-neutral-200 sm:text-2xl md:text-3xl">
            Residential & Commercial Tile Services Across Morris County
          </h2>
          <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Tiles & Stones NJ provides residential and commercial tile services throughout Morris County, NJ, including tile installation, repair, replacement, remodeling, floor installation, and floor tile repair.
          </p>
          <p className="font-sans mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Whether you're updating a bathroom, remodeling a kitchen, installing a new floor, replacing damaged tile, or planning a commercial project, our work focuses on proper preparation, accurate layouts, precise cuts, consistent grout lines, and clean finishing.
          </p>

          {/* Interactive County Navigation Buttons */}
          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="font-sans mb-4 text-xs uppercase tracking-widest text-neutral-400">
              Select Your Service Area
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-sans text-xs sm:gap-4 sm:text-sm">
              <Link 
                href="/services/tile-services-wayne-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Wayne, NJ
              </Link>
              <Link 
                href="/services/tile-services-passaic-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Passaic County, NJ
              </Link>
              <Link 
                href="/services/tile-services-bergen-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Bergen County, NJ
              </Link>
              <Link 
                href="/services/tile-services-morris-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Morris County, NJ
              </Link>
              <Link 
                href="/services/tile-services-essex-county-nj"
                className="px-4 py-2 bg-neutral-800 text-neutral-200 shadow-sm border border-neutral-700 rounded-sm transition-colors hover:border-caramel hover:text-caramel hover:bg-theme-cream"
              >
                Essex County, NJ
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Main Services List (Residential & Commercial) */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px] grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/hero-tiles.webp"
              alt="Professional Tile Installation in Morris County"
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-font-cormorant text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Residential & Commercial Tile Services Across Morris County
            </h2>
            <p className="font-sans mt-4 text-base leading-relaxed text-neutral-700 sm:mt-6 sm:text-lg">
              Tiles & Stones NJ provides suitable residential and commercial tile services throughout Morris County, New Jersey, working with suitable ceramic, porcelain, and large-format tile.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Ceramic & porcelain tile installation",
                "Large-format tile installation",
                "Floor installation & repair",
                "Wall tile installation & repair",
                "Kitchen backsplash installation",
                "Bathroom & shower tile",
                "Tile repair & replacement",
                "Tile remodeling",
                "Grout repair & finishing",
                "Feature wall tile installation",
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

      {/* County Service Areas */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-font-cormorant mb-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
              Tile Services Throughout Passaic, Bergen, Morris & Essex Counties
            </h2>
            <p className="font-sans mx-auto max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              Morris County contains numerous municipalities, including Parsippany-Troy Hills, Morristown, Morris Township, Denville, Dover, Montville, Randolph, Rockaway, Roxbury, Mount Olive, Chatham, Madison, Mendham, Chester, Florham Park, Hanover, Jefferson, Kinnelon, Lincoln Park, and others.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Passaic County */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-4 text-2xl text-[#403c38] sm:text-3xl">Passaic County</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tile installation and repair services are available for residential and commercial projects throughout Passaic County, including Wayne and surrounding communities.
              </p>
            </div>

            {/* Bergen County */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-4 text-2xl text-[#403c38] sm:text-3xl">Bergen County</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tiles & Stones NJ provides tile installation, repair, remodeling, and flooring services for suitable residential and commercial projects throughout Bergen County.
              </p>
            </div>

            {/* Morris County */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-caramel">
              <h3 className="text-font-cormorant mb-4 text-2xl text-caramel sm:text-3xl">Morris County</h3>
              <p className="font-sans mb-6 text-base leading-relaxed text-neutral-700">
                Homeowners and commercial customers in Morris County can access tile installation and related flooring services for suitable remodeling, repair, and new installation projects.
              </p>
              <ul className="space-y-3 font-sans text-sm text-neutral-700 sm:text-base">
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Ceramic & porcelain tile installation</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Floor tile installation and repair</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Bathroom and kitchen tile remodeling</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Large-format tile & wall tile applications</li>
                <li className="flex items-start"><span className="text-caramel mr-2 mt-1 shrink-0">◆</span> Grout repair and finishing work</li>
              </ul>
            </div>

            {/* Essex County */}
            <div className="bg-theme-cream p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 lg:p-10 border-l-4 border-[#403c38]">
              <h3 className="text-font-cormorant mb-4 text-2xl text-[#403c38] sm:text-3xl">Essex County</h3>
              <p className="font-sans text-base leading-relaxed text-neutral-700">
                Tiles & Stones NJ also provides tile installation, repair, remodeling, and flooring services for suitable residential and commercial projects throughout Essex County. Projects may include bathroom renovations, kitchen tile and backsplashes, floor installation and repair, wall tile, feature walls, large-format tile, and tile replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#403c38] px-4 py-16 text-center text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-font-cormorant mb-4 text-3xl leading-tight sm:text-4xl">
            Planning a Tile Project in Morris County?
          </h2>
          <p className="font-sans mb-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Whether you're planning a new tile installation, remodeling a kitchen or bathroom, repairing damaged tile, replacing an existing floor, or installing large-format tile, Tiles & Stones NJ provides services for suitable residential and commercial projects.
          </p>
          <p className="font-sans mb-10 text-sm text-neutral-400 sm:text-base">
            *Service availability depends on project location and scope.
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

export default TileServicesMorrisCountyNj;