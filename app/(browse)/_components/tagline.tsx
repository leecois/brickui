import brackets from '@/public/assets/svg/Brackets'

interface TagLineProps {
  className?: string
  children: React.ReactNode
}

const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={` flex items-center ${className || ''}`}>
      {brackets('left')}
      <div className='mx-3 text-n-3'>{children}</div>
      {brackets('right')}
    </div>
  )
}

export default TagLine
