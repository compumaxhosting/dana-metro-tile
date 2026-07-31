import PageHero from "./PageHero";

const GalleryHero = () => {
    return (
    <>
<PageHero
  backgroundImage={"/images/d1.jpeg"}
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