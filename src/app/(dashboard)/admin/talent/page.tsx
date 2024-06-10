import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import CardTalents from '@/components/Talent/CardTalents'
import CreateTalent from '@/components/Talent/CreateTalent'
import PaginationTalent from '@/components/Talent/PaginationTalent'
import SearchTalent from '@/components/Talent/SearchTalent'
import { db } from '@/db'
import { SearchParamProps } from '@/interfaces'
import React, { Suspense } from 'react'

const page = async ({ searchParams }: SearchParamProps) => {
    const searchQuery = searchParams?.query?.toString().toLowerCase() || ''
    const pageParam = searchParams?.page?.toString() || '1'
    const page = parseInt(pageParam, 10) || 1
    const itemsPerPage = 6
    const skip = (page - 1) * itemsPerPage

    const aktris = await db.wanita.findMany({
        where: {
            OR: [
                { namaAktris: { contains: searchQuery, mode: 'insensitive' } },
                { apalah: { contains: searchQuery, mode: 'insensitive' } }
            ]
        },
        skip,
        take: itemsPerPage
    })

    const totalAktris = await db.wanita.count({
        where: {
            OR: [
                { namaAktris: { contains: searchQuery, mode: 'insensitive' } },
                { apalah: { contains: searchQuery, mode: 'insensitive' } }
            ]
        }
    })

    const totalPages = Math.ceil(totalAktris / itemsPerPage)

    return (
        <div className='flex min-h-screen bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex items-center flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Talents' />
                <div className='flex justify-between items-center w-full'>
                    <Suspense>
                        <SearchTalent />
                    </Suspense>
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

                {totalPages !== 1 && (
                    <div className='flex items-center justify-center w-full mt-4'>
                        <Suspense>
                            <PaginationTalent totalPages={totalPages} page={page} />
                        </Suspense>
                    </div>
                )}

            </div>
        </div>
    )
}

export default page