"use client"

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
import { signOut } from "next-auth/react"


const SignOutModal = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-red-600 text-[14px] font-medium hover:text-red-400 transition duration-300">Sign out</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Aksi ini akan membuatmu keluar dari dashboard dan kamu diharuskan login kembali anjrot.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batalkan</AlertDialogCancel>
                    <AlertDialogAction className="bg-blue-600 text-gray-50" onClick={() =>
                        signOut({
                            redirect: true,
                            callbackUrl: `${window.location.origin}/signin`,
                        })
                    }>
                        Lanjutkan
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default SignOutModal