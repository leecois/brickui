import Image from 'next/image'
import Link from 'next/link'

import { socials } from '../constants'

import Section from './section'

const Footer = () => {
  return (
    <Section customPaddings='animate' crosses className='!px-0 !py-10'>
      <div className='container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between'>
        <p className=' text-n-4 lg:block'>© {new Date().getFullYear()}. All rights reserved.</p>

        <ul className='flex flex-wrap gap-5'>
          {socials.map(item => (
            <Link
              key={item.id}
              href={item.url}
              target='_blank'
              className='flex size-10 items-center justify-center rounded-full bg-n-7 text-white transition-colors hover:bg-n-6'>
              <item.iconUrl />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
