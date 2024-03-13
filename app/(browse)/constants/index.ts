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
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    image: 'https://images.unsplash.com/photo-1551292831-023188e78222'
  }
]
