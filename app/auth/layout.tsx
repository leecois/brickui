import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='flex h-screen w-2/3 items-center justify-center'>{children}</div>
      <div className="flex w-1/2 bg-[url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center" />
    </div>
  )
}

export default AuthLayout
