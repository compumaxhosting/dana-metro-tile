import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileContactEasy from '@/components/layout/MobileContactEasy'
import Topbar from '@/components/layout/Topbar'
import StoneServicesBergenCountyNj from '@/components/stones-service-pages-components/StoneServicesBergenCountyNj'

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <StoneServicesBergenCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page