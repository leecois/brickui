import { cn } from '@/utils'

export interface MeteorsProps {
  number?: number
  className?: string
}

const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const meteors = new Array(number).fill(true)

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-px before:w-[50px] before:translate-y-[-50%] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: 3,
            left: `${Math.floor(Math.random() * 3000 - 1000)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * 5 + 2)}s`
          }}></span>
      ))}
    </>
  )
}

export default Meteors
