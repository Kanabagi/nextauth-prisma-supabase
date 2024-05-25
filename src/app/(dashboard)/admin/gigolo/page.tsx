import CreateGigolo from '@/components/Gigolo/CreateGigolo'
import GigoloContent from '@/components/Gigolo/GigoloContent'
import NavbarUser from '@/components/NavbarUser'
import SideNav from '@/components/SideNav'
import { Button } from '@/components/ui/button'
import { db } from '@/db'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const page = async () => {
    const gigolo = await db.gigolo.findMany()

    return (
        <div className='min-h-screen flex bg-[#e9effd]'>
            <SideNav />

            <div className='flex-1 flex flex-col p-16 py-10 gap-6'>
                <NavbarUser title='Gigolo' />
                <div className='flex items-center w-full justify-between'>
                    <h1 className='font-semibold text-3xl'>Data Gigolo</h1>
                    <CreateGigolo />
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">No</TableHead>
                            <TableHead className="w-[250px]">First Name</TableHead>
                            <TableHead className="w-[250px]">Last Name</TableHead>
                            <TableHead className="text-right">Umur</TableHead>
                        </TableRow>
                    </TableHeader>
                    {gigolo.map((listGigolo) => {
                        return (
                            <GigoloContent listGigolo={listGigolo} key={listGigolo.id} />
                        )
                    })}
                </Table>
            </div>
        </div>
    )
}

export default page