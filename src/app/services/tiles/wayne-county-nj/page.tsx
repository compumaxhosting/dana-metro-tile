import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import TileInstallationWayneNj from "@/components/tiles-service-pages-components/TileServicesWayneCountyNj"
import Topbar from "@/components/layout/Topbar"
import MobileContactEasy from "@/components/layout/MobileContactEasy"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <TileInstallationWayneNj />  
    <MobileContactEasy />
    <Footer />  
    </>
  )
}

export default page