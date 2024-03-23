import Image from 'next/image'

import { smallSphere, stars } from '@/public/assets'

import Heading from './heading'
import SquishyCard from './pricing-list'
import Section from './section'

const Pricing = () => {
  return (
    <Section className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
        <div className='relative mb-[6.5rem] hidden justify-center lg:flex'>
          <Image src={smallSphere} className='relative z-1' width={255} height={255} alt='Sphere' />
          <div className='pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2'>
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

        <div className='mt-10 flex justify-center'>
          <a
            className='border-b text-xs font-bold uppercase tracking-wider text-white'
            href='/pricing'>
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
