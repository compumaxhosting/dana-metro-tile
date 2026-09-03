import PageHero from "../layout/PageHero";

const GalleryHero = () => {
    return (
    <>
<PageHero
  backgroundImage={"/images/d1.webp"}
  subtitle="OUR WORK"
  title={
    <>
      A quiet edit of <span className="italic text-premium-beige">recent works.</span>
    </>
  }
  description="Residential projects across Bergen, Essex, Morris, and the Jersey Shore."
/>
</>
)}
export default GalleryHero; 