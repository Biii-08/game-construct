import React from 'react'
import Hero from '../components/Hero'
import Navbar from '@/components/Navbar'
import Carasoul from '../components/Carasoul'

import Authentic from '../components/Authentic'
import Grow from '../components/Grow'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Carasoul/>
     
      <Authentic/>
      <Grow/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default page