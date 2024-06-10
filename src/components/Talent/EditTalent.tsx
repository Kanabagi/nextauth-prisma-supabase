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
import { IoIosClose } from 'react-icons/io';
import { Input } from '../ui/input';
import { RiErrorWarningFill } from 'react-icons/ri';
import { UploadDropzone } from '@/lib/uploadthing';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ImSpinner2 } from 'react-icons/im';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';
import { AiFillEdit } from 'react-icons/ai';
import { editTalent } from '@/actions/talent-action';

type DataAktrisProps = {
    talentId: number;
    talentName: string;
    talentUmur: string;
    talentDesc: string;
    talentApalah: string;
    talentImage: string;
}

const EditTalent = ({ talentId, talentName, talentUmur, talentDesc, talentApalah, talentImage }: DataAktrisProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setIsLoading] = useState(false)

    const [formState, action] = useFormState(editTalent.bind(null, talentId), {
        errors: {},
        submitSuccess: false
    })

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        if (imageUrl.length > 0) {
            formData.append('imageUrl', imageUrl)
        } else {
            formData.append('imageUrl', talentImage)
        }

        await action(formData)
        setIsLoading(true)
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
                className='p-2 bg-yellow-200 rounded-[8px] select-none'
                onClick={() => setIsOpen(true)}>
                <AiFillEdit className='w-6 h-6 text-yellow-700' />
            </DialogTrigger>
            <DialogContent className="w-full max-w-[650px]">
                <IoIosClose
                    className='absolute right-4 top-4 cursor-pointer w-7 h-7 text-gray-400'
                    onClick={() => setIsOpen(false)} />

                <DialogHeader>
                    <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
                        <h1 className='text-3xl font-bold text-center'>Create Gigolo</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <div className="relative w-full">
                                    <Input placeholder='Name' name='namaAktris' defaultValue={talentName} className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />
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
                                <div className="relative">
                                    <Input placeholder='Umur' name='umur' defaultValue={talentUmur} className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

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
                                    className="bg-slate-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300 w-full h-full mb-2"
                                />
                                {imageUrl ? (
                                    <div className='relative w-full h-full'>
                                        <Image src={imageUrl} alt='' height={300} width={300} className='absolute w-full h-full object-cover top-0 right-0 rounded-[12px]' />
                                    </div>
                                ) : (
                                    <div className='relative w-full h-full'>
                                        <Image src={talentImage} alt='' height={300} width={300} className='absolute w-full h-full object-cover top-0 right-0 rounded-[12px]' />
                                    </div>
                                )}

                            </div>
                            <div className='flex items-center gap-3'>
                                <div className="relative w-full">
                                    <Input placeholder='Deskripsi' name='desc' defaultValue={talentDesc} className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

                                    <TooltipProvider>
                                        <Tooltip>
                                            {formState.errors.desc && (
                                                <TooltipTrigger className="absolute right-0 top-0 translate-y-[14px] -translate-x-4" disabled>
                                                    <RiErrorWarningFill className="w-6 h-6 text-red-600 shadow-sm" />
                                                </TooltipTrigger>
                                            )}
                                            <TooltipContent>
                                                <p>{formState.errors.desc?.join(", ")}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <div className="relative">
                                    <Input placeholder='Slug' name='apalah' defaultValue={talentApalah} className={`border-gray-400 h-[50px] focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-0`} />

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
                            </div>

                            <Button type='submit' className="bg-blue-600 text-gray-50" disabled={loading}>
                                {loading ? <ImSpinner2 className='text-gray-300 w-5 h-5 animate-spin' /> : 'Edit Talent'}
                            </Button>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditTalent