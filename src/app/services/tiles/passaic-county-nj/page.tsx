import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import TileServicesPassaicCountyNj from "@/components/tiles-service-pages-components/TileServicesPassaicCountyNj"
import Topbar from "@/components/layout/Topbar"
import React from "react"
import MobileContactEasy from "@/components/layout/MobileContactEasy"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <TileServicesPassaicCountyNj />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page