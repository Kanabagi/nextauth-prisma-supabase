"use client"

import { navLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdArrowDroprightCircle } from "react-icons/io";

const SideNav = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`min-h-screen flex flex-col gap-10 select-none py-10 bg-gray-50 rounded-tr-[24px] relative ${isOpen ? 'w-[250px] pl-6' : ' w-[100px] pl-4'} transition-all duration-200`}>
      <h1 className='text-3xl font-bold px-4'>
        {isOpen ? 'Kanabagi': 'KB'}
      </h1>
      <div className='flex flex-col gap-4 w-full'>
        {navLinks.map((navItem) => {
          const isActive = pathname === navItem.path

          return (
            <>
              {isOpen ? (
                <Link href={navItem.path} className={`flex items-center w-full py-4 px-4 rounded-l-full gap-6 text-gray-400 font-semibold ${isActive && '!text-blue-600 bg-[#e9effd]'}`}>
                  <navItem.icon className='w-7 h-7' />
                  <span>{navItem.name}</span>
                </Link>
              ) : (
                <Link href={navItem.path} className={`flex items-center w-full py-4 px-4 rounded-l-full text-gray-400 ${isActive && '!text-blue-600 bg-[#e9effd]'}`}>
                  <navItem.icon className='w-7 h-7' />
                </Link>
              )}
            </>
          )
        })}
      </div>

      <IoMdArrowDroprightCircle className={`w-8 h-8 absolute top-0 right-0 text-blue-600 cursor-pointer translate-x-4 translate-y-[43px] ${isOpen && 'rotate-180'} transition-all duration-500`}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          } else {
            setIsOpen(false)
          }
        }} />
    </nav>
  )
}

export default SideNav