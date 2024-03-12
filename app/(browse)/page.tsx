import React from 'react'

import Footer from './_components/footer'
import Header from './_components/header'
import Hero from './_components/hero'
import { Testimonials } from './_components/testimonials'
import { ClipPathLinks } from './_components/clip-path-link'
import Section from './_components/section'

const Home = () => {
  return (
    <>
      <div className='overflow-hidden bg-n-8 pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
        <Hero />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default Home
