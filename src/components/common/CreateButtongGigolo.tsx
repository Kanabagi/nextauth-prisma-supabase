import React from 'react'
import { useFormStatus } from 'react-dom'
import { ImSpinner2 } from 'react-icons/im'
import { Button } from '../ui/button'

interface CreateGigoloButtong {
    children: React.ReactNode
    formData?: FormData
    kelasnem?: string
}

const CreateButtongGigolo = ({ children, formData, kelasnem }: CreateGigoloButtong) => {
    const { pending } = useFormStatus()

    return (
        <>
            <Button
                type='submit'
                className={`${kelasnem}`}
                disabled={pending}>
                {pending ? (
                    <ImSpinner2 className='text-gray-300 w-5 h-5 animate-spin' />
                ) : (
                    children
                )}
            </Button>
        </>
    )
}

export default CreateButtongGigolo