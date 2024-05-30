import CreateGigolo from '@/components/Gigolo/CreateGigolo'
import GigoloContent from '@/components/Gigolo/GigoloContent'
import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import { db } from '@/db'
import React from 'react'
import {
    Table,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import SearchGigolo, { SearchParamProps } from '@/components/Gigolo/SearchGigolo'

const page = async ({searchParams}: SearchParamProps) => {
    const gigolo = await db.gigolo.findMany()

    const searchQuery = searchParams?.query?.toString() || ''

    const filteredGigolo = gigolo.filter(g => {
        const fullName = `${g.firstName} ${g.lastName}`.toLowerCase()
        return fullName.includes(searchQuery.toLowerCase())
    })

    const sortedGigoloById = filteredGigolo.sort((a, b) => a.id - b.id)

    return (
        <div className='min-h-screen flex bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Gigolo' />
                <div className='flex items-center w-full justify-between'>
                    <SearchGigolo />
                    <CreateGigolo />
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
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
            </div>
        </div>
    )
}

export default page