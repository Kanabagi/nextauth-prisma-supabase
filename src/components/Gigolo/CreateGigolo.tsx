"use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { useFormState } from 'react-dom'
import { IoPersonAddSharp } from "react-icons/io5";
import { createGigolo } from '@/actions/create-gigolo'
import CreateButtongGigolo from '../common/CreateButtongGigolo'
import { IoIosClose } from 'react-icons/io'
import { toast } from 'sonner'

const CreateGigolo = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [formState, action] = useFormState(createGigolo, {
        errors: {},
        submitSuccess: false
    })

    useEffect(() => {
        if (Object.keys(formState.errors).length === 0 && formState.submitSuccess === true) {
            setIsOpen(false);
            toast.success('Gigolo berhasil ditambahkan')
        }
    }, [formState.errors]);

    return (
        <Dialog open={isOpen}>
            <DialogTrigger
                className='bg-green-500 shadow-sm px-7 h-[50px] text-gray-50 font-bold rounded-full flex items-center gap-4 hover:bg-green-400 transition duration-300 group select-none'
                onClick={() => setIsOpen(true)}>
                <IoPersonAddSharp className='text-gray-50 w-5 h-5' />
                Tambah Gigolo
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <IoIosClose
                        className='absolute right-4 top-4 cursor-pointer w-7 h-7 text-gray-400'
                        onClick={() => setIsOpen(false)} />

                    <form className='flex flex-col gap-10' action={action}>
                        <h1 className='text-3xl font-bold text-center'>Kanabagi Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Input placeholder='First name' name='firstName' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.firstName && 'border-red-600'}`} />
                                    {formState.errors.firstName ? (
                                        <p className='text-red-500 text-[12px]'>
                                            {formState.errors.firstName.join(", ")}
                                        </p>
                                    ) : (
                                        <p className='text-transparent select-none text-[12px]'>
                                            Opsional
                                        </p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2 w-full'>
                                    <Input placeholder='Last name' name='lastName' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.lastName && 'border-red-600'}`} />
                                    {formState.errors.lastName ? (
                                        <p className='text-red-500 text-[12px]'>
                                            {formState.errors.lastName.join(", ")}
                                        </p>
                                    ) : (
                                        <p className='text-transparent select-none text-[12px]'>
                                            Opsional
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Input placeholder='Umur' name='umur' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.umur && 'border-red-600'}`} />


                            {formState.errors.umur &&
                                <p className='text-red-500 text-center text-[12px]'>
                                    {formState.errors.umur.join(", ")}
                                </p>
                            }

                            {formState.errors._form &&
                                <p className='text-red-500 text-center text-[12px]'>
                                    {formState.errors._form.join(", ")}
                                </p>
                            }

                            <CreateButtongGigolo kelasnem='bg-blue-600 text-gray-50 mt-6'>
                                Tambah Gigolo
                            </CreateButtongGigolo>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CreateGigolo