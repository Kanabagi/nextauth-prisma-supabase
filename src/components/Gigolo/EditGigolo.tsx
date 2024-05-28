"use client"

import { editGigolo } from "@/actions/create-gigolo";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import React from 'react'
import { useFormState } from "react-dom";
import { RiEditBoxFill } from 'react-icons/ri';
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EditGigolo = ({ gigoloId, namaPertamaGigolo, namaTerakhirGigolo, umurGigolo }: { gigoloId: number, namaPertamaGigolo: string, namaTerakhirGigolo: string, umurGigolo: string }) => {
    const [formState, action] = useFormState(editGigolo.bind(null, gigoloId), {
        errors: {}
    })

    return (
        <Dialog>
            <DialogTrigger className="p-2 rounded-full bg-yellow-200">
                <RiEditBoxFill className="text-yellow-600 w-5 h-5" aria-label="Edit" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <form className='flex flex-col gap-10' action={action}>
                        <h1 className='text-3xl font-bold text-center'>Edit Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 w-full'>
                                <Input placeholder='First name' defaultValue={namaPertamaGigolo} name='firstName' className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />

                                <Input placeholder='Last name' defaultValue={namaTerakhirGigolo} name='lastName' className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
                            </div>
                            <Input placeholder='Umur' name='umur' defaultValue={umurGigolo} className='border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0' />
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

export default EditGigolo