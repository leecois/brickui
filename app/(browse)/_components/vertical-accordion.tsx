import { Dispatch, SetStateAction, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BarChart, Bell, DollarSign, LucideIcon, Play } from 'lucide-react'

import { useWindowSize } from './design/use-window-size'

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id)

  return (
    <section className='bg-indigo-600 p-4'>
      <div className='mx-auto flex h-fit w-full max-w-6xl flex-col overflow-hidden shadow lg:h-[450px] lg:flex-row'>
        {items.map(item => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          )
        })}
      </div>
    </section>
  )
}

interface PanelProps {
  open: number
  setOpen: Dispatch<SetStateAction<number>>
  id: number
  Icon: LucideIcon
  title: string
  imgSrc: string
  description: string
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }: PanelProps) => {
  const { width } = useWindowSize()
  const isOpen = open === id

  return (
    <>
      <button
        className='group relative flex flex-row-reverse items-center justify-end gap-4 border-b-DEFAULT border-r-DEFAULT border-slate-200 bg-white p-3 transition-colors hover:bg-slate-50 lg:flex-col'
        onClick={() => setOpen(id)}>
        <span
          style={{
            writingMode: 'vertical-lr'
          }}
          className='hidden rotate-180 text-xl font-light lg:block'>
          {title}
        </span>
        <span className='block text-xl font-light lg:hidden'>{title}</span>
        <div className='grid aspect-square w-6 place-items-center bg-indigo-600 text-white lg:w-full'>
          <Icon />
        </div>
        <span className='absolute bottom-0 right-[50%] z-20 size-4 translate-x-[50%] translate-y-[50%] rotate-45 border-b-DEFAULT border-r-DEFAULT border-slate-200 bg-white transition-colors group-hover:bg-slate-50 lg:bottom-[50%] lg:right-0 lg:border-b-0 lg:border-t-DEFAULT' />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial='closed'
            animate='open'
            exit='closed'
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            className='relative flex size-full items-end overflow-hidden bg-black'>
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='bg-black/40 px-4 py-2 text-white backdrop-blur-sm'>
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordion

const panelVariants = {
  open: {
    width: '100%',
    height: '100%'
  },
  closed: {
    width: '0%',
    height: '100%'
  }
}

const panelVariantsSm = {
  open: {
    width: '100%',
    height: '200px'
  },
  closed: {
    width: '100%',
    height: '0px'
  }
}

const descriptionVariants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 0.125
    }
  },
  closed: { opacity: 0, y: '100%' }
}

const items = [
  {
    id: 1,
    title: 'Earn more',
    Icon: DollarSign,
    imgSrc:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.'
  },
  {
    id: 2,
    title: 'Play more',
    Icon: Play,
    imgSrc:
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.'
  },
  {
    id: 3,
    title: 'Keep track',
    Icon: Bell,
    imgSrc:
      'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.'
  },
  {
    id: 4,
    title: 'Grow faster',
    Icon: BarChart,
    imgSrc:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.'
  }
]
