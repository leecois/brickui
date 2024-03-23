import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BarChart2, ChevronDown, Home, PieChart } from 'lucide-react'

import VerticalAccordion from '../vertical-accordion'

export const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [dir, setDir] = useState<null | 'l' | 'r'>(null)

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l')
    } else if (val === null) {
      setDir(null)
    }

    setSelected(val)
  }

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className='relative flex h-fit gap-2'>
      {TABS.map(t => {
        return (
          <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
            {t.title}
          </Tab>
        )
      })}

      <AnimatePresence>{selected && <Content dir={dir} selected={selected} />}</AnimatePresence>
    </div>
  )
}

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected
}: {
  children: ReactNode
  tab: number
  handleSetSelected: (val: number | null) => void
  selected: number | null
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 px-6 py-7.5 text-base font-bold transition-colors ${
        selected === tab ? ' bg-neutral-800 text-neutral-200' : 'text-neutral-100'
      }`}>
      <span>{children}</span>
      <ChevronDown className={`transition-transform ${selected === tab ? 'rotate-180' : ''}`} />
    </button>
  )
}

const Content = ({ selected, dir }: { selected: number | null; dir: null | 'l' | 'r' }) => {
  return (
    <motion.div
      id='overlay-content'
      initial={{
        opacity: 0,
        y: 8
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: 8
      }}
      className='absolute left-0 top-[calc(100%_+_24px)] w-full max-w-[100vw] rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-100 p-4'>
      <Bridge />
      <Nub selected={selected} />

      {TABS.map(t => {
        return (
          <div className='overflow-hidden' key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}>
                <t.Component />
              </motion.div>
            )}
          </div>
        )
      })}
    </motion.div>
  )
}

const Bridge = () => <div className='absolute inset-x-0 top-[24px] h-[24px]' />

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0)

  const calculateNubPosition = useCallback(() => {
    if (selected === null) return

    const hoveredTab = document.getElementById(`shift-tab-${selected}`)
    const overlayContent = document.getElementById('overlay-content')

    if (!hoveredTab || !overlayContent) return

    const tabRect = hoveredTab.getBoundingClientRect()
    const contentLeft = overlayContent.getBoundingClientRect().left

    const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft
    setLeft(tabCenter)
  }, [selected])

  useEffect(() => {
    calculateNubPosition()
  }, [calculateNubPosition, selected])

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)'
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className='absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-100'
    />
  )
}

// const Platform = () => {
//   return (
//     <div>
//       <VerticalAccordion />
//       <button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
//         <span>View more</span>
//         <ArrowRight />
//       </button>
//     </div>
//   )
// }

const Teams = () => {
  return (
    <div>
      <VerticalAccordion />
      <button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
        <span>View more</span>
        <ArrowRight />
      </button>
    </div>
  )
}

const Resources = () => {
  return (
    <div>
      <VerticalAccordion />
      <button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
        <span>View more</span>
        <ArrowRight />
      </button>
    </div>
  )
}

const Pricing = () => {
  return (
    <div className=' bg-white p-6 shadow-xl'>
      <div className='flex justify-around'>
        <div className='mb-3 space-y-3'>
          <h3 className='font-semibold'>For Individuals</h3>
          <a href='#' className='block text-sm hover:underline'>
            Introduction
          </a>
          <a href='#' className='block text-sm hover:underline'>
            Pay as you go
          </a>
        </div>
        <div className='mb-6 space-y-3'>
          <h3 className='font-semibold'>For Companies</h3>
          <a href='#' className='block text-sm hover:underline'>
            Startups
          </a>
          <a href='#' className='block text-sm hover:underline'>
            SMBs
          </a>
          <a href='#' className='block text-sm hover:underline'>
            Enterprise
          </a>
        </div>
      </div>
      <button className='w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white'>
        Contact sales
      </button>

      <button className='ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300'>
        <span>View more</span>
        <ArrowRight />
      </button>
    </div>
  )
}

const TABS = [
  // {
  //   title: 'Platform',
  //   Component: Platform
  // },
  {
    title: 'Teams',
    Component: Teams
  },
  {
    title: 'Resources',
    Component: Resources
  },
  {
    title: 'Pricing',
    Component: Pricing
  }
].map((n, idx) => ({ ...n, id: idx + 1 }))
