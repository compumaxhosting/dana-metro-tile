
import ContactPageForm from '@/components/contact-page-components/ContactPageFrom'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/layout/Topbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Topbar/>
    <Header />
    <ContactPageForm />
    <Footer />
    </>
  )
}

export default page