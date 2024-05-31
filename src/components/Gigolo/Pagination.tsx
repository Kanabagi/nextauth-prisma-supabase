"use client"


import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { IoIosArrowForward } from 'react-icons/io'

const Pagination = ({ page, totalPages }: { page: number, totalPages: number }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString() || '')
        params.set('page', newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='flex items-center gap-4'>
            <Button
                onClick={() => changePage(page - 1)}
                disabled={page <= 1}
                className='bg-purple-600 text-gray-50'
                size={"sm"}>
                <IoIosArrowForward className='w-5 h-5 text-gray-50 rotate-180' />
            </Button>
            <span className='select-none text-gray-500 text-[14px]'>Page {page} of {totalPages}</span>
            <Button
                onClick={() => changePage(page + 1)}
                disabled={page >= totalPages}
                className='bg-purple-600 text-gray-50'
                size={"sm"}>
                <IoIosArrowForward className='w-5 h-5 text-gray-50' />
            </Button>
        </div>
    )
}

export default Pagination