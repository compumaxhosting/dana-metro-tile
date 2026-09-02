import { servicePageServices } from "../../data/servicePageServices";
import Link from "next/link";
const ServicePageServices = () => {
  return (
    <section className="bg-theme-cream py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        {servicePageServices.map((service, index) => (
          <div
            key={service.number}
            className={`mb-28 grid items-center gap-16 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
          >
            {/* Image */}
            <div>
              <Link href={service.href}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-opacity hover:opacity-90 cursor-pointer"
                />
              </Link>
            </div>

            {/* Content */}
            <div>
              <a
                href={service.href}>
                <p className="text-font-cormorant text-5xl text-caramel">
                  {service.number}
                </p>
              </a>
              <Link href={service.href}>
                <h2 className="mt-4 text-font-cormorant text-5xl leading-tight">
                  {service.title}
                </h2>
              </Link>
              
               <Link href={service.href}>
              <p className="font-sans mt-6 max-w-xl leading-8 text-neutral-700">
                {service.description}
              </p>
              </Link>

               <Link href={service.href}>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-1 pt-6 lg:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="font-sans flex items-center gap-2 border-t border-caramel/30 pt-3 text-sm text-neutral-700"
                  >
                    <span className="text-caramel">◆</span>
                    {feature}
                  </div>
                ))}
              </div>
              </Link>
              {/* Redirect Button */}
              <div className="mt-10">
                <a
                  href={service.href}
                  className="inline-flex items-center justify-center border border-caramel bg-caramel px-8 py-3 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-transparent hover:text-caramel"
                >
                  Explore {service.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePageServices;