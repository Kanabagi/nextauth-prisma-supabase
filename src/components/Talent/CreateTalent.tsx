"use client"

import React, { useEffect, useState } from 'react'
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
import { UploadButton, UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { ImSpinner2 } from 'react-icons/im'
import Image from 'next/image'

const CreateTalent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setIsLoading] = useState(false)
    const [image, setImage] = useState<File | null>(null)

    const [formState, action] = useFormState(createTalent, {
        errors: {},
        submitSuccess: false
    });

    const handleSumit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('imageUrl', imageUrl);

        await action(formData);
        setIsLoading(true);
    }

    useEffect(() => {
        if (Object.keys(formState.errors).length === 0 && formState.submitSuccess === true) {
            setIsOpen(false);
            toast.success('Aktris berhasil ditambahkan')
        }
    }, [formState.errors]);

    return (
        <Dialog open={isOpen}>
            <DialogTrigger
                className='bg-green-500 shadow-sm px-7 h-[50px] text-gray-50 font-bold rounded-full flex items-center gap-4 hover:bg-green-400 transition duration-300 group select-none'
                onClick={() => setIsOpen(true)}>
                <IoPersonAddSharp className='text-gray-50 w-5 h-5' />
                Tambah Talent
            </DialogTrigger>
            <DialogContent className="w-full max-w-[650px]">
                <IoIosClose
                    className='absolute right-4 top-4 cursor-pointer w-7 h-7 text-gray-400'
                    onClick={() => setIsOpen(false)} />

                <DialogHeader>
                    <form className='flex flex-col gap-10' onSubmit={handleSumit}>
                        <h1 className='text-3xl font-bold text-center'>Create Gigolo</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-3'>
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
                            </div>
                            <div className="relative w-full flex gap-2 items-center justify-center">
                                <UploadDropzone
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                        // Do something with the response
                                        console.log("Files: ", res);
                                        setImageUrl(res[0].url)
                                        setIsLoading(false);
                                        toast.success('Aktris siap membabi buta');
                                    }}
                                    onUploadProgress={() => {
                                        setIsLoading(true);
                                    }}
                                    onUploadError={(error: Error) => {
                                        // Do something with the error.
                                        alert(`ERROR! ${error.message}`);
                                    }}
                                    onDrop={(files) => {
                                        // Do something with the files
                                        console.log("Files: ", files);
                                    }}
                                    className="bg-slate-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300 w-full"
                                />
                                {imageUrl && (
                                    <Image src={imageUrl} alt='' height={300} width={300} className='object-contain object-center' />
                                )}

                            </div>
                            <div className="relative w-full">
                                <Input placeholder='Apalah' name='apalah' className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

                                <TooltipProvider>
                                    <Tooltip>
                                        {formState.errors.apalah && (
                                            <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                            </TooltipTrigger>
                                        )}
                                        <TooltipContent>
                                            <p>{formState.errors.apalah?.join(", ")}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <Button type='submit' className="bg-blue-600 text-gray-50" disabled={loading}>
                                {loading ? <ImSpinner2 className='text-gray-300 w-5 h-5 animate-spin' /> : 'Create Talent'}
                            </Button>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreateTalent