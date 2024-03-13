import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'

type Item = {
  quote: string
  name: string
  title: string
  image: string
}

interface InfiniteMovingCardsProps {
  items: Item[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      duplicateItems()
      applyDirection()
      applySpeed()
    }
  }, [])

  const duplicateItems = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const children = Array.from(scroller.children)
    children.forEach(child => {
      const clone = child.cloneNode(true)
      scroller.appendChild(clone)
    })
  }

  const applyDirection = () => {
    const propertyValue = direction === 'left' ? 'forwards' : 'reverse'
    containerRef.current?.style.setProperty('--animation-direction', propertyValue)
  }

  const applySpeed = () => {
    const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
    containerRef.current?.style.setProperty('--animation-duration', duration)
  }

  const hoverClass = pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
  const animationClass = 'animate-scroll'

  return (
    <div
      ref={containerRef}
      className={`relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}>
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ${animationClass} ${hoverClass}`}>
        {items.map(item => (
          <li
            key={item.name}
            className='relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{ background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))' }}>
            <Image
              src={item.image}
              width={450}
              height={300}
              className='mb-5 h-60 w-full rounded-xl object-cover group-hover:card-shadow-xl'
              alt='thumbnail'
            />
            <blockquote>
              <span className='relative z-20 text-sm font-normal leading-[1.6] text-stone-100'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-sm font-normal leading-[1.6] text-stone-400'>
                    {item.name}
                  </span>
                  <span className='text-sm font-normal leading-[1.6] text-stone-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
