import React from 'react'
import { CgSearch } from 'react-icons/cg'
import { Input } from '../ui/input'

const SearchTalent = () => {
    return (
        <div className='border-2 border-green-600 h-[50px] rounded-full px-4 flex items-center group w-[150px] focus-within:w-[250px] transition-all !duration-500'>
            <CgSearch className='w-7 h-7 text-green-600' />
            <Input
                placeholder='Rahmat'
                className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-transparent border-none placeholder:text-green-600'
                autoFocus
            />
        </div>
    )
}

export default SearchTalent