import { ClipPathLinks } from './clip-path-link'

interface CompanyLogosProps {
  className: string
}

const CompanyLogos = ({ className }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className='mb-6 text-center text-n-1/50'>
        Millions of sellers at over 500,000 companies beat their number with BrickAI
      </h5>
      <ClipPathLinks />
    </div>
  )
}

export default CompanyLogos
