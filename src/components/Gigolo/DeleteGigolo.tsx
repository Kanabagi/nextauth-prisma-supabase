import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
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
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <button type='submit' className='bg-red-500 px-4 py-2 rounded-[8px] text-gray-50'>Delete</button>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default DeleteGigolo