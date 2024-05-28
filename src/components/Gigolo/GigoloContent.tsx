"use client"

import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Gigolo } from '@prisma/client'
import EditGigolo from './EditGigolo'
import DeleteGigolo from './DeleteGigolo'

const GigoloContent = ({ listGigolo, namaLengkap }: { listGigolo: Gigolo, namaLengkap: string }) => {
    const baru = new Date(listGigolo.createdAt).toLocaleTimeString() === new Date(listGigolo.updatedAt).toLocaleTimeString()

    const date = new Date(listGigolo.createdAt);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);

    const dateUpdate = new Date(listGigolo.updatedAt);
    const optionsUpdate: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDateUpdate = dateUpdate.toLocaleDateString('id-ID', optionsUpdate);

    return (
        <TableBody className='bg-gray-50'>
            <TableRow>
                <TableCell className="font-medium">{listGigolo.id}</TableCell>
                <TableCell className='capitalize'>{namaLengkap}</TableCell>
                <TableCell className="">{listGigolo.umur} tahun</TableCell>
                <TableCell className="">{formattedDate}</TableCell>
                <TableCell className="">
                    {baru ? 'Baru' : 'Tersunting'}
                </TableCell>
                <TableCell className=''>
                    {baru ? (
                        <span className='text-gray-400'>None</span>
                    ) : `${formattedDateUpdate}`}
                </TableCell>
                <TableCell className="flex items-center gap-3">
                    <EditGigolo gigoloId={listGigolo.id} namaPertamaGigolo={listGigolo.firstName} namaTerakhirGigolo={listGigolo.lastName} umurGigolo={listGigolo.umur} />
                    <DeleteGigolo gigoloId={listGigolo.id} />
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default GigoloContent