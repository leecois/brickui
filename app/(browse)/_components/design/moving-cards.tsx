'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Utils for handling classNames more elegantly
import { cn } from '@/utils'
// UI components from your project
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Type definition for props to enhance readability and maintainability
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

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    duplicateItems()
    applyAnimationSettings()
    // Enabling start state not needed if its sole purpose is to trigger animations
  }, [])

  const duplicateItems = () => {
    const scroller = scrollerRef.current
    if (scroller) {
      scroller.childNodes.forEach(child => {
        const clone = child.cloneNode(true)
        scroller.appendChild(clone)
      })
    }
  }

  const applyAnimationSettings = () => {
    const container = containerRef.current
    if (container) {
      const directionValue = direction === 'left' ? 'normal' : 'reverse'
      const durationValue = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'

      container.style.setProperty('--animation-direction', directionValue)
      container.style.setProperty('--animation-duration', durationValue)
    }
  }

  // Generate classNames dynamically using Tailwind and utility functions
  const containerClasses = cn(
    'relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
    className
  )

  const scrollerClasses = cn(
    'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll',
    pauseOnHover && 'hover:[animation-play-state:paused]'
  )

  return (
    <div ref={containerRef} className={containerClasses}>
      <ul ref={scrollerRef} className={scrollerClasses}>
        {items.concat(items).map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className='relative w-[350px] h-[450px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px] bg-gradient-to-b from-slate-800 to-slate-900'>
            <Card className='w-full h-full p-6 shadow-lg duration-300 ease-in-out hover:shadow-2xl'>
              <CardContent>
                <div className='flex items-center mt-6 space-x-3'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-medium'>{item.name}</div>
                    <div className='text-sm text-gray-600'>{item.title}</div>
                    <div className='font-bold text-green-600'>BrickAI</div>
                  </div>
                </div>
                <blockquote className='text-lg font-semibold italic leading-loose'>“{item.quote}”</blockquote>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
