"use client"

import React, { useEffect } from 'react'
import { Input } from '../ui/input'
import { CgSearch } from "react-icons/cg";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchGigolo = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams: URLSearchParams = useSearchParams()

    const query = searchParams.get('query') || ''

    function handleSearch(query: string) {
        const param = new URLSearchParams(searchParams.toString() || '')
        if (query) {
            param.set('query', query)
        } else {
            param.delete('query')
        }
        param.delete('page') // Reset to the first page on new search
        router.replace(`${pathname}?${param.toString()}`)
    }

    const debouncedSearch = useDebouncedCallback((query: string) => {
        handleSearch(query)
    }, 800)

    useEffect(() => {
        debouncedSearch(query)
    }, [query, debouncedSearch])

    return (
        <div className='border-2 border-green-600 h-[50px] rounded-full px-4 flex items-center group w-[150px] focus-within:w-[250px] transition-all !duration-500'>
            <CgSearch className='w-7 h-7 text-green-600' />
            <Input
                placeholder='Jisoo'
                className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-transparent border-none placeholder:text-green-600'
                defaultValue={query}
                onChange={(e) => debouncedSearch(e.target.value)}
                autoFocus
            />
        </div>
    )
}

export default SearchGigolo