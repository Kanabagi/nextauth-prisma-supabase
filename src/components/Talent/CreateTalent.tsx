"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { RiErrorWarningFill } from 'react-icons/ri'
import { IoIosClose } from 'react-icons/io'
import { Input } from '../ui/input'
import CreateButtongGigolo from '../common/CreateButtongGigolo'
import { IoPersonAddSharp } from 'react-icons/io5'
import { createTalent } from '@/actions/talent-action'
import { useFormState } from 'react-dom'
import { CreateTalentState } from '@/interfaces'

const CreateTalent = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [formState, action] = useFormState(createTalent, {
        errors: {},
        submitSuccess: false
    });

    const handleFileChange = (e: any) => {
        setImageFile(e.target.files[0]);
    };

    return (
        <Dialog open={isOpen}>
            <DialogTrigger
                className='bg-green-500 shadow-sm px-7 h-[50px] text-gray-50 font-bold rounded-full flex items-center gap-4 hover:bg-green-400 transition duration-300 group select-none'
                onClick={() => setIsOpen(true)}>
                <IoPersonAddSharp className='text-gray-50 w-5 h-5' />
                Tambah Talent
            </DialogTrigger>
            <DialogContent className="">
                <IoIosClose
                    className='absolute right-4 top-4 cursor-pointer w-7 h-7 text-gray-400'
                    onClick={() => setIsOpen(false)} />

                <DialogHeader>
                    <form className='flex flex-col gap-10' action={action}>
                        <h1 className='text-3xl font-bold text-center'>Create Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className="relative w-full">
                                <Input placeholder='Name' name='namaAktris' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />
                                <TooltipProvider>
                                    <Tooltip>
                                        {formState.errors.name && (
                                            <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                            </TooltipTrigger>
                                        )}
                                        <TooltipContent>
                                            <p>{formState.errors.name?.join(", ")}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </div>
                            <div className="relative w-full">
                                <Input name='imageUrl' type='file' onChange={handleFileChange}/>

                                {/* <TooltipProvider>
                                    <Tooltip>
                                        {formState.errors.umur && (
                                            <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                            </TooltipTrigger>
                                        )}
                                        <TooltipContent>
                                            <p>{formState.errors.umur?.join(", ")}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider> */}
                            </div>
                            <div className="relative w-full">
                                <Input placeholder='Umur' name='umur' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

                                <TooltipProvider>
                                    <Tooltip>
                                        {formState.errors.umur && (
                                            <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                            </TooltipTrigger>
                                        )}
                                        <TooltipContent>
                                            <p>{formState.errors.umur?.join(", ")}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="relative w-full">
                                <Input placeholder='Slug' name='topic' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

                                <TooltipProvider>
                                    <Tooltip>
                                        {formState.errors.slug && (
                                            <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                            </TooltipTrigger>
                                        )}
                                        <TooltipContent>
                                            <p>{formState.errors.slug?.join(", ")}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <CreateButtongGigolo kelasnem="bg-blue-600 text-gray-50">Create Talent</CreateButtongGigolo>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreateTalent