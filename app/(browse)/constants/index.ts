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
