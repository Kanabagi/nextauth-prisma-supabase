"use client"

import { Wanita } from '@prisma/client';
import Image from 'next/image'
import React, { useState } from 'react'
import DeleteTalent from '@/components/Talent/DeleteTalent'
import EditTalent from './EditTalent';

const CardTalents = ({ dataAktris }: { dataAktris: Wanita }) => {

    return (
        <div className='flex flex-col items-center justify-center gap-3 w-full'>
            <div className='flex items-start justify-end flex-col bg-gray-50 w-full max-w-[400px] rounded-[12px] overflow-hidden min-h-[300px] relative group'>

                {}
                <Image src={dataAktris.imageUrl} alt='' width={800} height={800} className='absolute w-full h-full object-cover group-hover:blur-[1px] transition-all duration-300' loading={'lazy'}/>
                <div className='absolute w-full h-[400px] bg-gradient-to-r from-slate-900' />

                <div className='flex flex-col gap-3 z-20 p-4'>
                    <div className={`flex items-center group-hover:translate-y-0 gap-3 transition-all duration-300 ${dataAktris.desc.length > 100 ? 'translate-y-16' : 'translate-y-6'} ${dataAktris.desc.length > 57 && dataAktris.desc.length < 100 && 'translate-y-[50px]'} ${dataAktris.desc.length > 170 && 'translate-y-[90px]'} `}>
                        <div className='p-2 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center'>
                            <span className='font-semibold'>{dataAktris.namaAktris.charAt(0)}</span>
                        </div>
                        <h2 className='font-bold text-gray-50'>{dataAktris.namaAktris}</h2>
                    </div>

                    <p className='text-[14px] text-gray-300 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all duration-300'>
                        {dataAktris.desc}
                    </p>
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


            <div className='flex items-center gap-3 w-full'>
                <EditTalent talentId={dataAktris.id} talentName={dataAktris.namaAktris} talentUmur={dataAktris.umur} talentDesc={dataAktris.desc} talentApalah={dataAktris.apalah} talentImage={dataAktris.imageUrl} />
                <DeleteTalent aktrisId={dataAktris.id} />
            </div>
        </div>
    )
}

export default CardTalents