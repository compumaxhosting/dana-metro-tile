type PageHeroProps = {
  backgroundImage: string;
  subtitle: string;
  title: React.ReactNode;
  description: string;
};

const PageHero = ({
  backgroundImage,
  subtitle,
  title,
  description,
}: PageHeroProps) => {
  return (
    <section
      className="relative h-[380px] sm:h-[420px] lg:h-[450px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 lg:px-12">
        <div className="max-w-[900px]">

          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-premium-beige font-sans">
            {subtitle}
          </p>

          <h1 className="mb-4 font-cormorant text-[50px] md:text-[70px] lg:text-[90px] leading-[1.05] text-white">
            {title}
          </h1>

          <p className="max-w-[520px] text-[20px] leading-9 text-gray-200">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default PageHero;