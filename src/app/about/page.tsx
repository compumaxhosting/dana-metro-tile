import AboutFounder from '@/components/AboutFounder'
import AboutHero from '@/components/AboutHero'
import AboutPageEndImage from '@/components/AboutPageEndImage'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Principles from '@/components/Principles'
import Topbar from '@/components/Topbar'
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