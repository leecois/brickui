'use client'

import { FaMicrosoft } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GoOrganization } from 'react-icons/go'

import { Button } from '@/components/ui/button'

export const Social = () => {
  return (
    <div className='w-full space-y-2'>
      <div className='flex items-center gap-x-2'>
        <Button variant='outline' size='lg' className='w-full' onClick={() => {}}>
          <FcGoogle className='size-5' />
        </Button>
        <Button variant='outline' size='lg' className='w-full' onClick={() => {}}>
          <FaMicrosoft className='size-5' />
        </Button>
      </div>
      <div className='items-center'>
        <Button variant='outline' size='lg' className='w-full space-x-2' onClick={() => {}}>
          <GoOrganization />
          <span>Log In with your Organization</span>
        </Button>
      </div>
    </div>
  )
}
