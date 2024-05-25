"use client"

import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Gigolo } from '@prisma/client'


const GigoloContent = ({ listGigolo }: { listGigolo: Gigolo }) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell className="font-medium">{listGigolo.id}</TableCell>
                <TableCell>{listGigolo.firstName}</TableCell>
                <TableCell>{listGigolo.lastName}</TableCell>
                <TableCell className="text-right">{listGigolo.umur} tahun</TableCell>
            </TableRow>
        </TableBody>
    )
}

export default GigoloContent