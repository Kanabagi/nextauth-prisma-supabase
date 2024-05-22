import React from 'react'
import { BsChatSquareHeartFill } from 'react-icons/bs'
import { DiYeoman } from 'react-icons/di'
import { GiMantaRay } from 'react-icons/gi'
import { MdChildFriendly } from 'react-icons/md'

const DashboardContent = () => {
    return (
        <div className='flex gap-4 w-full'>
            <div className='rounded-[8px] flex items-center bg-gray-50 p-4 px-6 gap-4 w-full'>
                <div className='p-2 rounded-full bg-yellow-200'>
                    <DiYeoman className='w-7 h-7 text-yellow-600' />
                </div>

                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>3.120</span>
                    <p className='font-medium text-[14px] text-gray-400'>Total Gigolo</p>
                </div>
            </div>
            <div className='rounded-[8px] flex items-center bg-gray-50 p-4 px-6 gap-4 w-full'>
                <div className='p-2 rounded-full bg-violet-200'>
                    <GiMantaRay className='w-7 h-7 text-violet-600' />
                </div>

                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>6.432</span>
                    <p className='font-medium text-[14px] text-gray-400'>Total Talent</p>
                </div>
            </div>
            <div className='rounded-[8px] flex items-center bg-gray-50 p-4 px-6 gap-4 w-full'>
                <div className='p-2 rounded-full bg-red-200'>
                    <BsChatSquareHeartFill className='w-7 h-7 text-red-600' />
                </div>

                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>13.120</span>
                    <p className='font-medium text-[14px] text-gray-400'>Total Order</p>
                </div>
            </div>
            <div className='rounded-[8px] flex items-center bg-gray-50 p-4 px-6 gap-4 w-full'>
                <div className='p-2 rounded-full bg-green-200'>
                    <MdChildFriendly className='w-7 h-7 text-green-600' />
                </div>

                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>120</span>
                    <p className='font-medium text-[14px] text-gray-400'>Total MBA</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent