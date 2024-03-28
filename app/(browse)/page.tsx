import Canvas from './_components/canvas'
import SquishyCard from './_components/design/pricing-card'
import Footer from './_components/footer'
import Header from './_components/header'
import Hero from './_components/hero'
import Pricing from './_components/pricing'
import { Testimonials } from './_components/testimonials'

export default function Home() {
  return (
    <main className='bg-n-8 pt-[4.75rem] lg:pt-[5.25rem]'>
      <div>
        <Header />
        <Hero />
        <Testimonials />
        <Pricing />
        {/* <SquishyCard /> */}
        <Canvas />
        <Footer />
      </div>
    </main>
  )
}
