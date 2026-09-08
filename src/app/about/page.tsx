import AboutFounder from '@/components/about-page-components/AboutFounder'
import AboutHero from '@/components/about-page-components/AboutHero'
import AboutPageEndImage from '@/components/about-page-components/AboutPageEndImage'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Principles from '@/components/about-page-components/Principles'
import Topbar from '@/components/layout/Topbar'
import React from 'react'
import MobileContactEasy from '@/components/layout/MobileContactEasy'
import BackToTopButton from '@/components/layout/BackToTopButton'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <AboutHero />
      <AboutFounder />
      <Principles />
      <AboutPageEndImage />
      <MobileContactEasy />
      <BackToTopButton />
      <Footer />
    </>
  )
}

export default page