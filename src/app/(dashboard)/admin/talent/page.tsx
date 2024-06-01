import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import CardTalents from '@/components/Talent/CardTalents'
import CreateTalent from '@/components/Talent/CreateTalent'
import SearchTalent from '@/components/Talent/SearchTalent'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const page = () => {
    return (
        <div className='flex min-h-screen bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex items-center flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Talents' />
                <div className='flex justify-between items-center w-full'>
                    <SearchTalent />
                    <CreateTalent />
                </div>
                <CardTalents />
            </div>
        </div>
    )
}

export default page