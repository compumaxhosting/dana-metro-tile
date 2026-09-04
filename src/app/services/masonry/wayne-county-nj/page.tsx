import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import MobileContactEasy from "@/components/layout/MobileContactEasy"
import Topbar from "@/components/layout/Topbar"
import MasonryServicesWayneCountyNj from "@/components/masonry-service-pages-components/MasonryServicesWayneCountyNj"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <MasonryServicesWayneCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page