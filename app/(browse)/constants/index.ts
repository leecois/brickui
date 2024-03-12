import { FileText, Home, PlusSquare, Search } from 'lucide-react'

import {
  discordBlack,
  facebook,
  instagram,
  logo,
  notification2,
  notification3,
  notification4,
  telegram,
  twitter
} from '@/public/assets'

export const navigation = [
  {
    id: '0',
    title: 'Platform',
    url: '#features',
    onlyMobile: true
  },
  {
    id: '1',
    title: 'Pricing',
    url: '#pricing',
    onlyMobile: true
  },
  {
    id: '2',
    title: 'Teams',
    url: '#how-to-use',
    onlyMobile: true
  },
  {
    id: '3',
    title: 'Roadmap',
    url: '#roadmap',
    onlyMobile: true
  },
  {
    id: '4',
    title: 'New account',
    url: '#signup',
    onlyMobile: true
  },
  {
    id: '5',
    title: 'Sign in',
    url: '#login',
    onlyMobile: true
  }
]

export const heroIcons = [
  { name: 'Home', component: Home },
  { name: 'FileText', component: FileText },
  { name: 'Search', component: Search },
  { name: 'PlusSquare', component: PlusSquare }
]
export const notificationImages = [notification4, notification3, notification2]

export const companyLogos = [logo, logo, logo, logo, logo]

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#'
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#'
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram,
    url: '#'
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram,
    url: '#'
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#'
  }
]
export const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    image: 'https://images.unsplash.com/photo-1536611908954-016795a9d9a1'
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
    image: 'https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    image: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647'
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a'
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    image: 'https://images.unsplash.com/photo-1551292831-023188e78222'
  }
]
