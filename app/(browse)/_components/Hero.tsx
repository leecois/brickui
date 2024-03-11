'use client'

import { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import Image from 'next/image'

import { curve, heroBackground, robot } from '@/public/assets'

import { heroIcons } from '../constants'

import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import CompanyLogos from './CompanyLogos'
import Generating from './Generating'
import Notification from './Notification'
import Section from './section'
import { CardContainer } from './design/3d-card'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const parallaxRef = useRef(null)

  return (
    <Section
      className='mt-[-5.25rem] pt-[12rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'>
      <div className='container relative' ref={parallaxRef}>
        <div className='relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]'>
          <h1 className='mb-6 text-[3rem] font-bold leading-[3.25rem] text-white md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[4.75rem] xl:leading-[4.5rem]'>
            <span className='relative inline-block'>
              BrickAI{' '}
              <Image
                src={curve}
                className='absolute left-0 top-full w-full'
                width={624}
                height={28}
                alt='Curve'
              />
            </span>
          </h1>
          <p className='mx-auto mb-6 max-w-3xl text-[0.875rem] leading-[1.5rem] text-n-2 md:text-[1rem] md:leading-[1.75rem] lg:mb-8 lg:text-[1.25rem] lg:leading-8'>
            Unleash the power of AI within BrickAI. Upgrade your productivity with BrickAI.
          </p>
          <Button variant={'galaxy'}>
            Get started
          </Button>
        </div>

        <div className='relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 rounded-2xl bg-conic-gradient p-0.5'>
            <CardContainer>
              <div className='relative rounded-[1rem] bg-n-8'>
                <div className='h-[1.4rem] rounded-t-[0.9rem] bg-n-10' />
                <div className='aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]'>
                  <Image
                    src={robot}
                    className='w-full translate-y-[8%] scale-[1.7] md:translate-y-[-28%] md:scale-[1] '
                    width={1024}
                    height={490}
                    alt='AI'
                  />

                  <Generating className='absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2' />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className='absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur xl:flex'>
                      {heroIcons.map((icon, index) => (
                        <li className='p-5' key={index}>
                          <Image src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className='absolute bottom-[11rem] right-[-5.5rem] hidden w-[18rem] xl:flex'
                      title='Coffee'
                    />
                  </ScrollParallax>
                </div>
              </div>
            </CardContainer>

            <Gradient />
          </div>

          <div className='absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]'>
            <Image src={heroBackground} className='w-full' width={1440} height={1800} alt='hero' />
          </div>

          <BackgroundCircles parallaxRef={undefined} />
        </div>

        <CompanyLogos className='relative z-10 mt-20 hidden lg:block' />
      </div>

      <BottomLine />
    </Section>
  )
}

export default Hero
