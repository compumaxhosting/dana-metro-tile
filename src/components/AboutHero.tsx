import PageHero from "./PageHero";

const AboutHero = () => {
    return (
        <>
        <PageHero
            backgroundImage={"/images/g1.webp"}
            subtitle="ABOUT US"
            title={
                <>
                    Studio for <span className="italic text-premium-beige">extraordinary stone.</span>
                </>
            }
            description="For years we've been delivering premium craftsmanship across New Jersey."
        />
        </>
    )
}
export default AboutHero;