import Footer from "@/components/Footer"
import GalleryFilterGalleryPage from "@/components/GalleryFilterGalleryPage"
import GalleryHero from "@/components/GalleryHero"
import Header from "@/components/Header"
import Topbar from "@/components/Topbar"
import React from "react"

const page = () => {
  return (
    <>
    <Topbar/>
    <Header />
    <GalleryHero />
    <GalleryFilterGalleryPage />
    <Footer />
    </>
  )
}

export default page