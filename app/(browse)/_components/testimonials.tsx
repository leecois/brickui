'use client'

import { testimonials } from '../constants'

import Meteors from './design/meteors'
import { InfiniteMovingCards } from './design/moving-cards'
import Section from './section'

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
