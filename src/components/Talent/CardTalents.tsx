import { Wanita } from '@prisma/client';
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from 'react-icons/md';
import { RiShareBoxFill } from 'react-icons/ri';
import { SlBasketLoaded } from "react-icons/sl";

const CardTalents = ({ dataAktris }: { dataAktris: Wanita }) => {
    return (
        <div className='flex items-center justify-end flex-col bg-gray-50 w-full max-w-[400px] rounded-[12px] overflow-hidden min-h-[300px] relative group'>
            <Image src={dataAktris.imageUrl} alt='' width={800} height={800} className='absolute top-0 left-0 w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300' />
            <div className='absolute w-full h-[400px] bg-gradient-to-r from-slate-900' />
            <div className='flex flex-col gap-3 z-20 p-4'>
                <div className='flex items-center gap-3 translate-y-16 group-hover:translate-y-0 transition-all duration-300'>
                    <div className='p-2 px-4 rounded-full bg-gray-50'>
                        <span className='font-semibold'>{dataAktris.namaAktris.charAt(0)}</span>
                    </div>
                    <h2 className='font-bold text-gray-50'>{dataAktris.namaAktris}</h2>
                </div>
                <p className='text-[14px] text-gray-300 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all duration-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus beatae quasi earum tempora aliquam sunt aperiam rem fuga dolorem veniam? </p>
                <div className='flex items-center gap-3 z-20 relative'>
                    <div className='flex items-center p-[2px] px-3 border-2 border-gray-50 rounded-full'>
                        <span className='text-[14px] text-gray-50 font-medium'>{dataAktris.umur}</span>
                    </div>
                    <div className='flex items-center p-[2px] px-3 border-2 border-gray-50 rounded-full'>
                        <span className='text-[14px] text-gray-50 font-medium'>{dataAktris.apalah}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTalents