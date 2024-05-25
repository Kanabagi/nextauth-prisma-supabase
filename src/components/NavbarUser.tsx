"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import SignOutModal from './SignOutModal'

const NavbarUser = ({title}: {title?: string}) => {
    const { data: session } = useSession()

    return (
        <nav className='bg-gray-50 p-2 px-6 rounded-[8px] flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <span className='font-medium text-blue-600 text-xl'>{title}</span>
            </div>

            <div className='flex items-center gap-4'>
                <IoMdNotifications className='w-6 h-6 text-gray-400 cursor-pointer' />
                <Image src="/images/cici.jpg" alt='' height={40} width={40} className='rounded-full' />
                <div className='flex flex-col items-start'>
                    <h2 className='font-medium capitalize'>{session?.user.username}</h2>
                    <SignOutModal />
                </div>
            </div>
        </nav>
    )
}

export default NavbarUser