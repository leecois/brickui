import Footer from './_components/footer'
import Header from './_components/header'
import Hero from './_components/hero'
import Pricing from './_components/pricing'
import { Testimonials } from './_components/testimonials'

const Home = () => {
  return (
    <>
      <div className='overflow-hidden text-white bg-n-8 pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
        <Hero />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default Home
