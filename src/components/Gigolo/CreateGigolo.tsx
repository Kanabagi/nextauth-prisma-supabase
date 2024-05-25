"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormState } from 'react-dom'
import createGigolo from '@/actions/create-gigolo'

const CreateGigolo = () => {

    const [formState, action] = useFormState(createGigolo, {
        errors: {}
    })

    return (
        <Dialog>
            <DialogTrigger>Tambah Gigolo</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <form className='flex flex-col gap-10' action={action}>
                        <h1 className='text-3xl font-bold text-center'>Kanabagi Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 w-full'>
                                <Input placeholder='First name' name='firstName' className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />

                                <Input placeholder='Last name' name='lastName' className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
                            </div>
                            <Input placeholder='Umur' name='umur' className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
                            {formState.errors.firstName &&
                                <p className='text-red-500 text-center'>
                                    {formState.errors.firstName.join(", ")}
                                </p>
                            }
                            {formState.errors.lastName &&
                                <p className='text-red-500 text-center'>
                                    {formState.errors.lastName.join(", ")}
                                </p>
                            }
                            {formState.errors.umur &&
                                <p className='text-red-500 text-center'>
                                    {formState.errors.umur.join(", ")}
                                </p>
                            }

                            {formState.errors._form && 
                                <p className='text-red-500 text-center'>
                                    {formState.errors._form.join(", ")}
                                </p>
                            }
                            
                            <Button className='bg-blue-600 text-gray-50' type='submit'>Tambah Gigolo</Button>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CreateGigolo