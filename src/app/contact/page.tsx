
import ContactPageForm from '@/components/contact-page-components/ContactPageFrom'
import BackToTopButton from '@/components/layout/BackToTopButton'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MobileContactEasy from '@/components/layout/MobileContactEasy'
import Topbar from '@/components/layout/Topbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <ContactPageForm />
      <MobileContactEasy />
      <BackToTopButton />
      <Footer />
    </>
  )
}

export default page