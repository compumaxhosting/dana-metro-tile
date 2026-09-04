import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import MobileContactEasy from "@/components/layout/MobileContactEasy"
import Topbar from "@/components/layout/Topbar"
import MasonryServicesPassaicCountyNj from "@/components/masonry-service-pages-components/MasonryServicesPassaicCountyNj"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <MasonryServicesPassaicCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page