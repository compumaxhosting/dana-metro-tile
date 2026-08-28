import AboutFounder from '@/components/about-page-components/AboutFounder'
import AboutHero from '@/components/about-page-components/AboutHero'
import AboutPageEndImage from '@/components/about-page-components/AboutPageEndImage'
import Footer from '@/components/home-page-components/Footer'
import Header from '@/components/home-page-components/Header'
import Principles from '@/components/about-page-components/Principles'
import Topbar from '@/components/home-page-components/Topbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Topbar/>
    <Header />
    <AboutHero />
    <AboutFounder />
    <Principles />
    <AboutPageEndImage />
    <Footer />
    </>
  )
}

export default page