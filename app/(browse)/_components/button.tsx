import Link from 'next/link'
import React from 'react'

import ButtonSvg from '@/public/assets/svg/ButtonSvg'

type ButtonProps = {
  className?: any
  href?: any
  onClick?: () => any
  children: any
  px?: any
  white?: any
}

const Button: React.FC<ButtonProps> = ({ className, href, onClick, children, px, white }) => {
  const classes = `relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
  const spanClasses = 'relative z-10'

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <Link href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  )

  return href ? renderLink() : renderButton()
}

export default Button
