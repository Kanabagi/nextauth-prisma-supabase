"use client"

import React from 'react'
import { Input } from '../ui/input'
import { CgSearch } from "react-icons/cg";
import { usePathname, useRouter } from 'next/navigation';

export type SearchParamProps = {
    params?: { id: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}

const SearchGigolo = ({ searchParams }: SearchParamProps) => {
    const pathname = usePathname()
    const { replace } = useRouter()

    const query = searchParams?.query || '';

    function handleSearch(query: string) {
        const param = new URLSearchParams(window.location.search)
        if (query) {
            param.set('query', query)
        } else {
            param.delete('query')
        }

        replace(`${pathname}?${param.toString()}`)
    }


    return (
        <div className='border-2 border-purple-600 h-[50px] rounded-full px-4 flex items-center group focus-within:border-blue-600 w-[150px] focus-within:w-[250px] transition-all !duration-500'>
            <CgSearch className='w-7 h-7 text-purple-600 group-focus-within:text-blue-600' />
            <Input placeholder='Jisoo' className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-transparent border-none placeholder:text-purple-600 focus-within:placeholder:text-blue-600'
                defaultValue={query}
                onChange={(e) => handleSearch(e.target.value)} 
                autoFocus/>
        </div>
    )
}

export default SearchGigolo