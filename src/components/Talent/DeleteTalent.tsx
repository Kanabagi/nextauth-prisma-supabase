"use client"

import React from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import FormButtong from '../common/FormButtong'
import { FaTrash } from 'react-icons/fa6'
import { deleteTalent } from '@/actions/talent-action'

const DeleteTalent = ({ aktrisId }: { aktrisId: number }) => {
    const handleDelete = deleteTalent.bind(null, aktrisId)

    return (
        <AlertDialog>
            <AlertDialogTrigger className='p-[10px] bg-red-200 rounded-[8px]'>
                <FaTrash className='w-5 h-5 text-red-700' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <form action={handleDelete} className='flex gap-4'>
                        <FormButtong kasihStylePuh='bg-red-600 text-white'>Delete</FormButtong>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteTalent