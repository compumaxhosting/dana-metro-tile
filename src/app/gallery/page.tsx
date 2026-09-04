import Footer from "@/components/layout/Footer"
import GalleryFilterGalleryPage from "@/components/gallery-page-components/GalleryFilterGalleryPage"
import GalleryHero from "@/components/home-page-components/GalleryHero"
import Header from "@/components/layout/Header"
import Topbar from "@/components/layout/Topbar"
import React from "react"
import MobileContactEasy from "@/components/layout/MobileContactEasy"

const page = () => {
  return (
    <>
    <Topbar/>
    <Header />
    <GalleryHero />
    <GalleryFilterGalleryPage />
    <MobileContactEasy />
    <Footer />
    </>
  )
}

export default page