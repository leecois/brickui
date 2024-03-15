import { smallSphere, stars } from '@/public/assets'

import Image from 'next/image'
import Heading from './heading'
import SquishyCard from './pricing-list'
import Section from './section'

const Pricing = () => {
  return (
    <Section className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
          <Image src={smallSphere} className='relative z-1' width={255} height={255} alt='Sphere' />
          <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
            <Image src={stars} className='w-full' width={950} height={400} alt='Stars' />
          </div>
        </div>

        <Heading
          tag='Get started with BrickAI'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />

        <div className='relative'>
          <SquishyCard />
        </div>

        <div className='flex justify-center mt-10'>
          <a
            className='text-xs font-code text-white font-bold tracking-wider uppercase border-b'
            href='/pricing'>
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
