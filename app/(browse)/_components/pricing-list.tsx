import { Check } from 'lucide-react'
import { pricing } from '../constants'
import { Button } from '@/components/ui/button'

const PricingList = () => {
  return (
    <div className='grid grid-cols-1 gap-[1rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-lg:flex-wrap'>
      {pricing.map(({ id, title, description, price, features }) => {
        const isProfessional = title === 'Professional'
        return (
          <div
            key={id}
            className={`w-[19rem] max-lg:w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto ${
              isProfessional
                ? '-mt-1 ring-4 ring-offset-2 ring-offset-blue-50 ring-orange-500'
                : 'mt-0'
            } py-6 [&>h4]:odd:text-color-2 [&>h4]:even:text-color-1`}>
            <h4 className='h4 mb-4 flex justify-between items-center'>
              {title}
              {isProfessional && (
                <span className='text-sm font-semibold py-1 px-4 bg-white text-black rounded-full'>
                  Most Popular
                </span>
              )}
            </h4>
            <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>{description}</p>
            <div className='flex items-center text-white h-[5.5rem] mb-6'>
              {price && (
                <>
                  <div className='h3'>$</div>
                  <div className='text-[5.5rem] leading-none font-bold'>{price}</div>
                </>
              )}
            </div>
            <Button className='w-full mb-6' variant='galaxy'>
              {price ? 'Get started' : 'Contact us'}
            </Button>
            <ul>
              {features.map((feature, index) => (
                <li
                  key={`${id}-feature-${index}`}
                  className='grid grid-cols-[auto_1fr] items-center gap-x-4 py-5 text-white border-t border-n-6'>
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
