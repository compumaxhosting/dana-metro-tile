import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import TileServicesBergenCountyNj from "@/components/tiles-service-pages-components/TileServicesBergenCountyNj"
import Topbar from "@/components/layout/Topbar"
import React from "react"
import MobileContactEasy from "@/components/layout/MobileContactEasy"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <TileServicesBergenCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page