'use client'

import Section from './section'
import Meteors from './design/meteors'
import { testimonials } from '../constants'
import { InfiniteMovingCards } from './design/moving-cards'

export function Testimonials() {
  return (
    <Section crosses className='!px-10 !py-0'>
      <div className='relative flex h-screen flex-col items-center justify-center overflow-hidden rounded-md bg-black antialiased dark:bg-black'>
        <Meteors number={50} />
        <InfiniteMovingCards items={testimonials} direction='right' speed='normal' />
      </div>
    </Section>
  )
}
