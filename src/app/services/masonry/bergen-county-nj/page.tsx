import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import MobileContactEasy from "@/components/layout/MobileContactEasy"
import Topbar from "@/components/layout/Topbar"
import MasonryServicesBergenCountyNj from "@/components/masonry-service-pages-components/MasonryServicesBergenCountyNj"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <MasonryServicesBergenCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page