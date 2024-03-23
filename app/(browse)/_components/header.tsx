'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { curve } from '@/public/assets'
import { AnimatedHamburgerButton } from '@/public/assets/svg/MenuSvg'

import { navigation } from '../constants'

import { HamburgerMenu } from './design/header'
import { Tabs } from './design/tabs'
import { LoginButton } from '@/components/auth/login-button'

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation)
  }

  const handleClick = () => {
    if (!openNavigation) return
    setOpenNavigation(false)
  }

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: 'flex',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        when: 'afterChildren'
      },
      transitionEnd: {
        display: 'none'
      }
    }
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}>
      <div className='flex items-center justify-between px-5 max-lg:py-4 lg:px-7.5 xl:px-10'>
        <span className='relative inline-block pb-1 text-white'>
          LOGO{' '}
          <Image
            src={curve}
            className='absolute left-0 top-full w-full xl:-mt-2'
            width={624}
            height={28}
            alt='Curve'
          />
        </span>

        <motion.nav
          initial='closed'
          animate={openNavigation ? 'open' : 'closed'}
          variants={navVariants}
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed inset-x-0 bottom-0 top-20 bg-n-8 lg:mx-auto lg:hidden lg:bg-transparent`}>
          <div className='relative z-2 m-auto flex flex-col items-center justify-center'>
            {navigation.map(item => (
              <div
                key={item.id}
                onClick={handleClick}
                className='relative block p-6 text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:hidden xl:px-12'>
                {item.title}
              </div>
            ))}
          </div>
          <HamburgerMenu />
        </motion.nav>

        <div className='hidden lg:block'>
          <Tabs />
        </div>

        <div className='flex items-center'>
          <LoginButton>
            <Button variant='galaxy' className='mr-8 hidden lg:flex'>
              Log in
            </Button>
          </LoginButton>

          <Button variant='secondary' className='hidden lg:flex'>
            Sign up for free
          </Button>

          <div className='ml-auto lg:hidden '>
            <AnimatedHamburgerButton isOpen={openNavigation} toggle={toggleNavigation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
