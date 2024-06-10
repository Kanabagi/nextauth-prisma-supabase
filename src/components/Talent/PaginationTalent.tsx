"use client"

import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const PaginationTalent = ({ totalPages, page }: { page: number, totalPages: number }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString() || '')
        params.set('page', newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    }

    const getPages = () => {
        const pages = []
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (page <= 2) {
                pages.push(1, 2, 3, '...', totalPages)
            } else if (page >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', page - 1, page, page + 1, '...', totalPages)
            }
        }
        return pages
    }

    const pages = getPages()

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <button disabled={page <= 1} onClick={() => changePage(page - 1)}>
                        <PaginationPrevious />
                    </button>
                </PaginationItem>
                {pages.map((p, index) => {
                    const isActive = p === page

                    return (
                        <PaginationItem key={index}>
                            {p === '...' ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    isActive={p === page}
                                    onClick={() => changePage(Number(p))}
                                    className={`${isActive && 'bg-violet-600 text-gray-50 hover:!bg-violet-600 !cursor-default'} hover:bg-violet-200 cursor-pointer transition-all duration-300`}
                                >
                                    {p}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <button disabled={page >= totalPages} onClick={() => changePage(page + 1)}>
                        <PaginationNext />
                    </button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationTalent