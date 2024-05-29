import React from 'react'
import { useFormStatus } from 'react-dom'
import { ImSpinner2 } from "react-icons/im";
import { toast } from 'sonner';
import { AlertDialogCancel } from '../ui/alert-dialog';

interface FormButtonProps {
    children: React.ReactNode
    formData?: FormData
    kasihStylePuh?: string
}

const FormButtong = ({ children, formData, kasihStylePuh }: FormButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <>
            <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
            <button
                type='submit'
                className={`${kasihStylePuh} ${pending ? 'cursor-not-allowed px-6' : 'cursor-pointer'} px-[18px] rounded-[8px]`}
                disabled={pending}
                onClick={() => {
                    toast.success('Gigolo has been deleted')
                }}
            >
                {pending ? (
                    <ImSpinner2 className='text-gray-300 w-5 h-5 animate-spin' />
                ) : (
                    children
                )}
            </button>
        </>
    )
}

export default FormButtong