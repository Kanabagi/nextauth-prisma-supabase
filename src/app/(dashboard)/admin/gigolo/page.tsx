import CreateGigolo from '@/components/Gigolo/CreateGigolo'
import GigoloContent from '@/components/Gigolo/GigoloContent'
import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import { db } from '@/db'
import React, { Suspense } from 'react'
import {
    Table,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import SearchGigolo from '@/components/Gigolo/SearchGigolo'
import Pagination from '@/components/Gigolo/Pagination'
import { SearchParamProps } from '@/interfaces'
 
const page = async ({ searchParams }: SearchParamProps) => {
    const pageParam = searchParams?.page?.toString() || '1'
    const page = parseInt(pageParam, 10) || 1
    const itemsPerPage = 5
    const skip = (page - 1) * itemsPerPage

    const searchQuery = searchParams?.query?.toString().toLowerCase() || ''

    const gigolo = await db.gigolo.findMany({
        where: {
            OR: [
                { firstName: { contains: searchQuery, mode: 'insensitive' } },
                { lastName: { contains: searchQuery, mode: 'insensitive' } },
                {
                    AND: [
                        { firstName: { contains: searchQuery.split(' ')[0], mode: 'insensitive' } },
                        { lastName: { contains: searchQuery.split(' ')[1], mode: 'insensitive' } }
                    ]
                }
            ]
        },
        skip,
        take: itemsPerPage,
    })

    const totalGigolo = await db.gigolo.count({
        where: {
            OR: [
                { firstName: { contains: searchQuery, mode: 'insensitive' } },
                { lastName: { contains: searchQuery, mode: 'insensitive' } },
                {
                    AND: [
                        { firstName: { contains: searchQuery.split(' ')[0], mode: 'insensitive' } },
                        { lastName: { contains: searchQuery.split(' ')[1], mode: 'insensitive' } }
                    ]
                }
            ]
        }
    })

    const totalPages = Math.ceil(totalGigolo / itemsPerPage)
    const sortedGigoloById = gigolo.sort((a, b) => a.id - b.id)

    return (
        <div className='min-h-screen flex bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex items-center flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Gigolo' />
                <div className='flex items-center w-full justify-between'>
                    <Suspense>
                        <SearchGigolo />
                    </Suspense>
                    <CreateGigolo />
                </div>
                <Table>
                    <TableCaption className={`${sortedGigoloById.length === 0 && 'hidden'}`}>A list of your gigolo.</TableCaption>
                    <TableHeader className='bg-gray-100 rounded-[8px] '>
                        <TableRow>
                            <TableHead className="w-[80px] font-semibold">ID</TableHead>
                            <TableHead className="w-[250px] font-semibold">Nama Lengkap</TableHead>
                            <TableHead className="w-[150px] font-semibold">Umur</TableHead>
                            <TableHead className="w-[200px] font-semibold">Created At</TableHead>
                            <TableHead className="w-[150px] font-semibold">Status</TableHead>
                            <TableHead className="w-[200px] font-semibold">Updated At</TableHead>
                            <TableHead className="font-semibold">Tombol Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    {sortedGigoloById.map((listGigolo) => {
                        const namaLengkap = listGigolo.firstName + ' ' + listGigolo.lastName
                        return (
                            <GigoloContent listGigolo={listGigolo} key={listGigolo.id} namaLengkap={namaLengkap} />
                        )
                    })}
                </Table>

                {sortedGigoloById.length === 0 ? (
                    <div className='text-center w-full text-[28px] font-medium text-gray-400 py-20'>Data tidak ditemukan</div>
                ) : (
                    <Suspense>
                        <Pagination page={page} totalPages={totalPages} />
                    </Suspense>
                )}
            </div>
        </div>
    )
}

export default page