import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import CardTalents from '@/components/Talent/CardTalents'
import CreateTalent from '@/components/Talent/CreateTalent'
import SearchTalent from '@/components/Talent/SearchTalent'
import { db } from '@/db'
import React from 'react'

const page = async () => {
    const aktris = await db.wanita.findMany()

    return (
        <div className='flex min-h-screen bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex items-center flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Talents' />
                <div className='flex justify-between items-center w-full'>
                    <SearchTalent />
                    <CreateTalent />
                </div>

                <div className='flex flex-col items-center gap-10'>
                    <ul className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
                        {aktris.map((aktrisList) => {
                            return (
                                <li key={aktrisList.id} className='flex justify-center'>
                                    <CardTalents dataAktris={aktrisList} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default page