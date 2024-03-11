import React from 'react'
import { Menu, X } from 'lucide-react'

type MenuIconProps = {
  isOpen: boolean
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen }) => {
  const Icon = isOpen ? X : Menu

  return (
    <div>
      <Icon color='white' size={24} />
    </div>
  )
}

export default MenuIcon
