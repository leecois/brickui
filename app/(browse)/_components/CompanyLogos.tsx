import Image from 'next/image'

import { companyLogos } from '../constants'

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h5 className='mb-6 text-center text-n-1/50'>
        Millions of sellers at over 500,000 companies beat their number with BrickAI
      </h5>
      <ul className='flex'>
        {companyLogos.map((logo, index) => (
          <li className='flex h-[8.5rem] flex-1 items-center justify-center' key={index}>
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
