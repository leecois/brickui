'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  ElementType,
  Dispatch,
  SetStateAction,
  MouseEvent
} from 'react'

interface MouseEnterContextValue {
  isMouseEntered: boolean
  setIsMouseEntered: Dispatch<SetStateAction<boolean>>
}

const MouseEnterContext = createContext<MouseEnterContextValue | undefined>(undefined)

interface CardContainerProps {
  children?: ReactNode
  className?: string
  containerClassName?: string
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className = '',
  containerClassName = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 85
      const y = (e.clientY - top - height / 2) / 85
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }
  }

  const handleMouseEnter = () => setIsMouseEntered(true)
  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (containerRef.current) {
      containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
  }

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      <div
        className={`flex items-center justify-center ${containerClassName}`}
        style={{ perspective: '1000px' }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative flex items-center justify-center transition-all duration-200 ease-linear ${className}`}
          style={{ transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div
    className={`size-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}>
    {children}
  </div>
)

interface CardItemProps {
  as?: ElementType
  children: ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}

export const CardItem: React.FC<CardItemProps> = ({
  as: Tag = 'div',
  children,
  className = '',
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null)
  const { isMouseEntered } = useMouseEnter()

  useEffect(() => {
    if (ref.current) {
      const transform = isMouseEntered
        ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        : 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
      ref.current.style.transform = transform
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ])

  return (
    <Tag
      ref={ref as any}
      className={`w-fit transition duration-200 ease-linear ${className}`}
      {...rest}>
      {children}
    </Tag>
  )
}

export const useMouseEnter = (): MouseEnterContextValue => {
  const context = useContext(MouseEnterContext)
  if (!context) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
