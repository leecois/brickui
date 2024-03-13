'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    quote: string
    name: string
    title: string
    image: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {items.map((item, idx) => (
          <li
            className='relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)'
            }}
            key={item.name}>
            <Card className='w-[350px] h-full p-6 shadow-lg  duration-300 ease-in-out hover:shadow-2xl'>
              <CardContent>
                <blockquote className='text-lg font-semibold italic'>
                  {item.quote}
                </blockquote>
                <div className='flex items-center mt-6 space-x-3'>
                  <Avatar>
                    <AvatarImage alt='Nicole Coetzer' src={item.image} />
                  
                  </Avatar>
                  <div>
                    <div className='font-medium'>{item.name}</div>
                    <div className='text-sm text-gray-600'>{item.title}</div>
                    <div className='font-bold text-green-600'>Kinsta</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
