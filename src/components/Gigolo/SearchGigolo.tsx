import React from 'react'
import { Input } from '../ui/input'
import { CgSearch } from "react-icons/cg";

const SearchGigolo = () => {
    return (
        <div className='border-2 border-purple-600 h-[50px] rounded-full px-4 flex items-center group focus-within:border-blue-600 w-[150px] focus-within:w-[250px] transition-all duration-300'>
            <CgSearch className='w-7 h-7 text-purple-600 group-focus-within:text-blue-600'/>
            <Input placeholder='Search...' className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-transparent border-none placeholder:text-purple-600 focus-within:placeholder:text-blue-600' />
        </div>
    )
}

export default SearchGigolo