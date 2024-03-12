'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}
export function NavbarV2() {
  const [active, setActive] = useState<string | null>(null)

  const serviceLinks = [
    { href: '/web-dev', text: 'Web Development' },
    { href: '/interface-design', text: 'Interface Design' },
    { href: '/seo', text: 'Search Engine Optimization' },
    { href: '/branding', text: 'Branding' }
  ]

  const productItems = [
    {
      title: 'Rogue',
      href: 'https://userogue.com',
      src: 'https://images.unsplash.com/photo-1585353227354-4fd707d647cb',
      description: 'Respond to government RFPs, RFIs and RFQs 10x faster using AI'
    },
    {
      title: 'Algochurn',
      href: 'https://algochurn.com',
      src: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9',
      description: 'Prepare for tech interviews like never before.'
    },
    {
      title: 'Tailwind Master Kit',
      href: 'https://tailwindmasterkit.com',
      src: 'https://images.unsplash.com/photo-1557053964-937650b63311',
      description: 'Production ready Tailwind css components for your next project'
    },
    {
      title: 'Moonbeam',
      href: 'https://gomoonbeam.com',
      src: 'https://images.unsplash.com/photo-1569399078436-da10fbd60f12',
      description: 'Never write from scratch again. Go from idea to blog in minutes.'
    }
  ]

  const pricingLinks = [
    { href: '/hobby', text: 'Hobby' },
    { href: '/individual', text: 'Individual' },
    { href: '/team', text: 'Team' },
    { href: '/enterprise', text: 'Enterprise' }
  ]

  const nothing = [{ href: '/nothing', text: 'Nothing' }]

  return (
    <div className='inset-x-0 top-10 z-50 m-6 mx-auto max-w-max'>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item='Services'>
          <div className='flex flex-col space-y-4 text-sm'>
            {serviceLinks.map((link, index) => (
              <HoveredLink key={index} href={link.href}>
                {link.text}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Products'>
          <div className='grid grid-cols-2 gap-10 p-4 text-sm'>
            {productItems.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Pricing'>
          <div className='flex flex-col space-y-4 text-sm'>
            {pricingLinks.map((link, index) => (
              <HoveredLink key={index} href={link.href}>
                {link.text}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Nothing'>
          <div className='flex flex-col space-y-4 text-sm'>
            {nothing.map((link, index) => (
              <HoveredLink key={index} href={link.href}>
                {link.text}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className='text-neutral-700 hover:text-black dark:text-neutral-200 '>
      {children}
    </Link>
  )
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <p className='mx-5 cursor-pointer text-sm font-semibold uppercase text-stone-300 duration-200 hover:scale-110 hover:text-sky-100 hover:opacity-[0.9] dark:hover:text-white'>
        {item}
      </p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%)] -translate-x-1/2 p-6'>
              <motion.div
                transition={transition}
                layoutId='active'
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'>
                <motion.div layout className='h-full w-max p-4'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative m-auto  flex justify-center rounded-full p-2 shadow-input'>
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='mr-2 shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='mb-1 text-xl font-bold text-black dark:text-white'>{title}</h4>
        <p className='max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}
