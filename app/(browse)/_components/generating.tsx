import Image from 'next/image'

import { loading } from '@/public/assets'

interface GeneratingProps {
  className: string
}

const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={`flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6  ${
        className || ''
      } text-base text-white`}>
      <Image className='mr-4 size-5 ' src={loading} alt='Loading' />
      AI is generating
    </div>
  )
}

export default Generating
