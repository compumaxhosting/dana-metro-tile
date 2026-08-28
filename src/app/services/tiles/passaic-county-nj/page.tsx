import Footer from "@/components/home-page-components/Footer"
import Header from "@/components/home-page-components/Header"
import TileServicesPassaicCountyNj from "@/components/tiles-service-pages-components/TileServicesPassaicCountyNj"
import Topbar from "@/components/home-page-components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <TileServicesPassaicCountyNj />
    <Footer />
    </>
  )
}

export default page