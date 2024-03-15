'use client'

import { motion } from 'framer-motion'
import React from 'react'

const SquishyCard: React.FC = () => {
  return (
    <section className='bg-neutral-900 px-4 py-12'>
      <div className='mx-auto w-fit'>
        <Card />
      </div>
    </section>
  )
}

const Card: React.FC = () => {
  return (
    <motion.div
      whileHover='hover'
      transition={{
        duration: 1,
        ease: 'backInOut'
      }}
      variants={{
        hover: {
          scale: 1.05
        }
      }}
      className='relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8'>
      <div className='relative z-10 text-white'>
        <span className='mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white'>
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1
            }
          }}
          transition={{
            duration: 1,
            ease: 'backInOut'
          }}
          className='my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]'>
          $299/
          <br />
          Month
        </motion.span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem. lo</p>
      </div>
      <button className='absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white'>
        Get it now
      </button>
      <Background />
    </motion.div>
  )
}

const Background: React.FC = () => {
  return (
    <motion.svg
      width='320'
      height='384'
      viewBox='0 0 320 384'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute inset-0 z-0'
      variants={{
        hover: {
          scale: 1.5
        }
      }}
      transition={{
        duration: 1,
        ease: 'backInOut'
      }}>
      <motion.rect
        x='0'
        y='60'
        width='270'
        height='140'
        fill='#4D4D4D'
        variants={{
          hover: {
            scale: 1.1
          }
        }}
        transition={{
          duration: 1,
          ease: 'linear'
        }}
      />
      <motion.rect
        x='20'
        y='100'
        width='270'
        height='120'
        fill='#4D4D4D'
        variants={{
          hover: {
            scale: 0.5
          }
        }}
        transition={{
          duration: 1,
          ease: 'anticipate'
        }}
      />
    </motion.svg>
  )
}

export default SquishyCard
