import PageHero from "./PageHero";

const ServiceHero = () => {
  return (
    <>
      <PageHero
        backgroundImage="/images/a1.webp"
        subtitle="DISCIPLINES"
        title={
          <>
            Tiles, Stones, and <span className="italic text-premium-beige">Masonry.</span>
          </>
        }
        description="Every project is scoped, drawn, and installed by our own team with a single standard of craft."
      />
    </>
  );
};

export default ServiceHero;