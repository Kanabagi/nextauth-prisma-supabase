import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { deleteGigolo } from '@/actions/create-gigolo'
import FormButtong from '../common/FormButtong'


const DeleteGigolo = ({ gigoloId }: { gigoloId: number }) => {
    const handleDelete = deleteGigolo.bind(null, gigoloId)

    return (
        <AlertDialog>
            <AlertDialogTrigger className='p-2 bg-red-200 rounded-full'>
                <RiDeleteBin6Fill className='text-red-600 w-5 h-5' />
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

export default DeleteGigolo