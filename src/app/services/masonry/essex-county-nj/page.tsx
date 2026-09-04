import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import MobileContactEasy from "@/components/layout/MobileContactEasy"
import Topbar from "@/components/layout/Topbar"
import MasonryServicesEssexCountyNj from "@/components/masonry-service-pages-components/MasonryServicesEssexCountyNj"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <MasonryServicesEssexCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page