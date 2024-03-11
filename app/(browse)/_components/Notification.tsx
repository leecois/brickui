import Image from 'next/image'

import { notification1 } from '@/public/assets'

import { notificationImages } from '../constants'

const Notification = ({ className, title }: { className: string; title: string }) => {
  return (
    <div
      className={`${
        className || ''
      } flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur`}>
      <Image src={notification1} width={62} height={62} alt='image' className='rounded-xl' />

      <div className='flex-1'>
        <h6 className='mb-1 text-base font-semibold text-white'>{title}</h6>

        <div className='flex items-center justify-between'>
          <ul className='-m-0.5 flex'>
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className='flex size-6 overflow-hidden rounded-full border-2 border-n-12'>
                <Image src={item} className='w-full' width={20} height={20} alt='' />
              </li>
            ))}
          </ul>
          <div className=' text-n-13'>1m ago</div>
        </div>
      </div>
    </div>
  )
}

export default Notification
