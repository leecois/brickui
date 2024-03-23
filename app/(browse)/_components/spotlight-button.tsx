import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const spanRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`

      spanRef.current!.animate({ left }, { duration: 250, fill: 'forwards' })
    }

    const handleMouseLeave = () => {
      spanRef.current!.animate({ left: '50%' }, { duration: 100, fill: 'forwards' })
    }

    btnRef?.current?.addEventListener('mousemove', handleMouseMove)
    btnRef?.current?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      btnRef?.current?.removeEventListener('mousemove', handleMouseMove)
      btnRef?.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className='relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white'>
      <span className='pointer-events-none relative z-10 mix-blend-difference'>Get Started!</span>
      <span
        ref={spanRef}
        className='pointer-events-none absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100'
      />
    </motion.button>
  )
}
