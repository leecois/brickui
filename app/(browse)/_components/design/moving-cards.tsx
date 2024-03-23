'use client'

import React, { useCallback, useEffect, useRef } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/utils'

interface Item {
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

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className = ''
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  const applyAnimationSettings = useCallback(() => {
    const container = containerRef.current
    if (container) {
      const directionValue = direction === 'left' ? 'normal' : 'reverse'
      const durationValue = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'

      container.style.setProperty('--animation-direction', directionValue)
      container.style.setProperty('--animation-duration', durationValue)
    }
  }, [direction, speed])

  useEffect(() => {
    applyAnimationSettings()
  }, [applyAnimationSettings])

  // const duplicateItems = () => {
  //   const scroller = scrollerRef.current
  //   if (scroller) {
  //     scroller.childNodes.forEach(child => {
  //       const clone = child.cloneNode(true)
  //       scroller.appendChild(clone)
  //     })
  //   }
  // }

  const containerClasses = cn(
    'relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
    className
  )

  const scrollerClasses = cn(
    'flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-4 py-4',
    pauseOnHover && 'hover:[animation-play-state:paused]'
  )

  return (
    <div ref={containerRef} className={containerClasses}>
      <ul ref={scrollerRef} className={scrollerClasses}>
        {items.concat(items).map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className='relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-8 border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 px-8 py-6 md:w-[450px]'>
            <Card className='size-full border-0 bg-slate-800 p-6 text-white shadow-lg duration-300 ease-in-out'>
              <CardContent>
                <div className='mt-6 flex items-center space-x-3'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-medium'>{item.name}</div>
                    <div className='text-sm '>{item.title}</div>
                    <div className='font-bold text-green-600'>BrickAI</div>
                  </div>
                </div>
                <blockquote className='text-lg font-semibold italic leading-loose'>
                  “{item.quote}”
                </blockquote>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
