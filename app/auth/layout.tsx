import React from 'react'
import Image from 'next/image'

import { robot2, scene } from '@/public/assets'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative grid h-screen grid-cols-1 md:grid-cols-3'>
      <div className='absolute inset-0 -z-1'>
        <Image src={scene} layout='fill' objectFit='cover' alt='Background' />
      </div>

      <div className='z-10 flex items-center justify-center md:col-span-2'>{children}</div>

      <div className='relative -z-1 hidden md:col-span-1 md:block '>
        <Image src={robot2} layout='fill' objectFit='cover' alt='Background' />
      </div>
    </div>
  )
}

export default AuthLayout
