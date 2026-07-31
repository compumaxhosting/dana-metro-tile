
import ContactPageForm from '@/components/ContactPageFrom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Topbar from '@/components/Topbar'
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