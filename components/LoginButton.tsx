'use client'

import { User } from 'lucide-react'
import React from 'react'

export default function LoginButton() {
  return (
    <button className='rounded-full text-white py-2 px-5 bg-black lg:flex items-center gap-1 hover:opacity-80 hidden transition-all duration-200'>
      <User width={20} height={20}/>
      <span>Login</span>
    </button>
  )
}
