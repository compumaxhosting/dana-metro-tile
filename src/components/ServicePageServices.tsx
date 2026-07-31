import { servicePageServices } from "../data/servicePageServices";

const ServicePageServices = () => {
  return (
    <section className="bg-theme-cream py-24">
      <div className="mx-auto max-w-[1320px] px-6">

        {servicePageServices.map((service, index) => (
          <div
            key={service.number}
            className={`mb-28 grid items-center gap-16 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>

              <p className="text-font-cormorant text-5xl text-caramel">
                {service.number}
              </p>

              <h2 className="mt-4 text-font-cormorant text-5xl leading-tight">
                {service.title}
              </h2>

              <p className="font-sans mt-6 max-w-xl leading-8 text-neutral-700">
                {service.description}
              </p>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1 pt-6">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="font-sans flex items-center gap-2 text-sm text-neutral-700 border-t border-caramel/30 pt-3"
                  >
                    <span className="text-caramel">◆</span>
                    {feature}
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ServicePageServices;