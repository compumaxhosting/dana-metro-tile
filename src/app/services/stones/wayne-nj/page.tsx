import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import StoneServicesWayneCountyNj from '@/components/stones-service-pages-components/StoneServicesWayneCountyNj'
import Topbar from '@/components/layout/Topbar'
import MobileContactEasy from '@/components/layout/MobileContactEasy'

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <StoneServicesWayneCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page