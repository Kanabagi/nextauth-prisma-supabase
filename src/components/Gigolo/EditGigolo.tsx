"use client"

import { editGigolo } from "@/actions/create-gigolo";
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




import React, { useEffect, useState } from 'react'
import { useFormState } from "react-dom";
import { RiEditBoxFill, RiErrorWarningFill } from 'react-icons/ri';
import { Input } from "../ui/input";
import CreateButtongGigolo from "../common/CreateButtongGigolo";
import { toast } from "sonner";
import { IoIosClose } from "react-icons/io";

const EditGigolo = ({ gigoloId, namaPertamaGigolo, namaTerakhirGigolo, umurGigolo }: { gigoloId: number, namaPertamaGigolo: string, namaTerakhirGigolo: string, umurGigolo: string }) => {
    const [formState, action] = useFormState(editGigolo.bind(null, gigoloId), {
        errors: {},
        submitSuccess: false
    })

    const [isEditOpen, setIsEditOpen] = useState(false)

    useEffect(() => {
        if (Object.keys(formState.errors).length === 0 && formState.submitSuccess === true) {
            setIsEditOpen(false);
            toast.success('Gigolo berhasil diedit')
        }
    }, [formState.errors]);

    return (
        <Dialog open={isEditOpen}>
            <DialogTrigger className="p-2 rounded-full bg-yellow-200" onClick={() => setIsEditOpen(true)}>
                <RiEditBoxFill className="text-yellow-600 w-5 h-5" aria-label="Edit" />
            </DialogTrigger>
            <DialogContent className="">
                <IoIosClose
                    className='absolute right-4 top-4 cursor-pointer w-7 h-7 text-gray-400'
                    onClick={() => setIsEditOpen(false)} />

                <DialogHeader>
                    <form className='flex flex-col gap-10' action={action}>
                        <h1 className='text-3xl font-bold text-center'>Edit Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 w-full'>
                                <div className="relative w-full">
                                    <Input placeholder='First name' defaultValue={namaPertamaGigolo} name='firstName' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.firstName && 'border-red-600'}`} />

                                    <TooltipProvider>
                                        <Tooltip>
                                            {formState.errors.firstName && (
                                                <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                    <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                                </TooltipTrigger>
                                            )}
                                            <TooltipContent>
                                                <p>{formState.errors.firstName?.join(", ")}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </div>

                                <div className="relative w-full">
                                    <Input placeholder='Last name' defaultValue={namaTerakhirGigolo} name='lastName' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.lastName && 'border-red-600'}`} />

                                    <TooltipProvider>
                                        <Tooltip>
                                            {formState.errors.lastName && (
                                                <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                    <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                                </TooltipTrigger>
                                            )}
                                            <TooltipContent>
                                                <p>{formState.errors.lastName?.join(", ")}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>

                            <div className="relative w-full">
                                <Input placeholder='Umur' name='umur' defaultValue={umurGigolo} className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${formState.errors.umur && 'border-red-600'}`} />

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

                            <CreateButtongGigolo kelasnem="bg-blue-600 text-gray-50">Edit Gigolo</CreateButtongGigolo>

                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditGigolo