import PageHero from "../layout/PageHero";

const AboutHero = () => {
    return (
        <>
        <PageHero
            backgroundImage={"/images/g1.webp"}
            subtitle="ABOUT US"
            title={
                <>
                    About Metro Group Construction –<span className="italic text-premium-beige">Tile, Stone & Masonry Experts in NJ</span>
                </>
            }
            description="For years we've been delivering premium craftsmanship across New Jersey."
        />
        </>
    )
}
export default AboutHero;