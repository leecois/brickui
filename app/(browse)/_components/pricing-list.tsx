import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { pricing } from '../constants'

const PricingList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 max-lg:flex-wrap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {pricing.map(({ id, title, description, price, features }) => {
        const isProfessional = title === 'Professional'
        return (
          <div
            key={id}
            className={`w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 max-lg:w-full lg:w-auto ${
              isProfessional
                ? '-mt-1 ring-4 ring-orange-500 ring-offset-2 ring-offset-blue-50'
                : 'mt-0'
            } py-6 [&>h4]:odd:text-color-2 [&>h4]:even:text-color-1`}>
            <h4 className='h4 mb-4 flex items-center justify-between'>
              {title}
              {isProfessional && (
                <span className='rounded-full bg-white px-4 py-1 text-sm font-semibold text-black'>
                  Most Popular
                </span>
              )}
            </h4>
            <p className='body-2 mb-3 min-h-16 text-n-1/50'>{description}</p>
            <div className='mb-6 flex h-[5.5rem] items-center text-white'>
              {price && (
                <>
                  <div className='h3'>$</div>
                  <div className='text-[5.5rem] font-bold leading-none'>{price}</div>
                </>
              )}
            </div>
            <Button className='mb-6 w-full' variant='galaxy'>
              {price ? 'Get started' : 'Contact us'}
            </Button>
            <ul>
              {features.map((feature, index) => (
                <li
                  key={`${id}-feature-${index}`}
                  className='grid grid-cols-[auto_1fr] items-center gap-x-4 border-t border-n-6 py-5 text-white'>
                  <Check size={24} />
                  <p className='body-2'>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default PricingList
