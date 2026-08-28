import Footer from "@/components/home-page-components/Footer"
import Header from "@/components/home-page-components/Header"
import Topbar from "@/components/home-page-components/Topbar"
import MasonryServicesBergenCountyNj from "@/components/masonry-service-pages-components/MasonryServicesBergenCountyNj"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <MasonryServicesBergenCountyNj />
    <Footer />
    </>
  )
}

export default page