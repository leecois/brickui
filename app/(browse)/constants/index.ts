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
export const pricing = [
  {
    id: '0',
    title: 'Free',
    description: '',
    price: '0',
    features: [
      'Basic Sequence Automation (2 Sequence Limit)',
      'Buying Intent (3 Intent Topics Limit) & Intent Filters',
      'AI-Assisted Email Writing (5k words monthly limit)',
      'LinkedIn Extension',
      'Send 250 Emails/day',
      'Gmail Extension',
      'Deals',
      'CSV Export'
    ]
  },
  {
    id: '1',
    title: 'Basic',
    description: 'Per user, per month Billed monthly',
    price: '49',
    features: [
      'Everything in Free plus:',
      'Select 10,000 Records at a Time',
      'Buying Intent (6 Intent Topics Limit) & Intent Filters',
      'Job Changes',
      'Outreach & SalesLoft Integration',
      'Advanced Filters',
      'Email Open & Click Tracking',
      'Advanced Greenhouse Integration (Bi-Directional)'
    ]
  },
  {
    id: '2',
    title: 'Professional',
    description: 'Per user, per month Billed monthly',
    price: '99',
    features: [
      'Everything in Basic plus:',
      'No Sequence Limit',
      'Uncapped Sending Limits with SendGrid',
      'Advanced Reports & Dashboards (Pre-Built)',
      'Email Reply & Meeting Tracking',
      'Integration with All Email Providers',
      'AI-Assisted Email Writing (300k words monthly limit)',
      'Manual Tasks',
      'Call Recordings',
      'Permission Profiles',
      'Buying Intent (9 Intent Topics Limit) & Intent Filters'
    ]
  },
  {
    id: '3',
    title: 'Organization',
    description: 'Per user, per month (min 3 users) Annual Billing Only',
    price: '449',
    features: [
      'Everything in Professional plus:',
      'Buying Intent (12 Intent Topics Limit) & Intent Filters',
      'AI-Assisted Email Writing (1M words monthly limit)',
      'Call Transcriptions, International Dialing & Local Presence',
      'Customizable Reports',
      'Login with Single Sign-On (SSO)',
      'Advanced Security Configurations',
      'Advanced API Access'
    ]
  }
]
