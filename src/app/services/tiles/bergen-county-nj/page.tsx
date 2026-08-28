import Footer from "@/components/home-page-components/Footer"
import Header from "@/components/home-page-components/Header"
import TileServicesBergenCountyNj from "@/components/tiles-service-pages-components/TileServicesBergenCountyNj"
import Topbar from "@/components/home-page-components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar />
    <Header />
    <TileServicesBergenCountyNj />
    <Footer />
    </>
  )
}

export default page