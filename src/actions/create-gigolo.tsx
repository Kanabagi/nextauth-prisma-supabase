"use server"

import { db } from "@/db"
import { CreateGigoloState } from "@/interfaces"
import { authOptions } from "@/lib/auth"
import { Gigolo } from "@prisma/client"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const createGigoloSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    umur: z.string().min(1).max(2)
})

export async function createGigolo(formState: CreateGigoloState, formData: FormData): Promise<CreateGigoloState> {
    const correctInput = createGigoloSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        umur: formData.get('umur')
    })

    const umurGigolo = await db.gigolo.findFirst({
        where: {
            umur: correctInput.data?.umur
        }
    })

    if (umurGigolo?.umur === correctInput.data?.umur) {
        return {
            errors: {
                umur: ['Umur sudah ada']
            }
        }
    }

    if (!correctInput.success) {
        return {
            errors: correctInput.error.flatten().fieldErrors
        }
    }

    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You are not authenticated']
            }
        }
    }

    let gigolo: Gigolo
    try {
        gigolo = await db.gigolo.create({
            data: {
                firstName: correctInput.data.firstName,
                lastName: correctInput.data.lastName,
                umur: correctInput.data.umur
            }
        })

    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['An error occurred']
                }
            }
        }
    }

    revalidatePath('/dashboard/admin/gigolo')
    return {
        errors: {}
    }
}

export async function editGigolo(id: number, formState: CreateGigoloState, formData: FormData): Promise<CreateGigoloState> {
    const correctInput = createGigoloSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        umur: formData.get('umur')
    })

    const umurGigolo = await db.gigolo.findFirst({
        where: {
            umur: correctInput.data?.umur
        }
    })

    if (umurGigolo?.umur === correctInput.data?.umur) {
        return {
            errors: {
                umur: ['Umur sudah ada']
            }
        }
    }

    if (!correctInput.success) {
        return {
            errors: correctInput.error.flatten().fieldErrors
        }
    }

    let gigolo: Gigolo
    try {
        gigolo = await db.gigolo.update({
            where: { id },
            data: {
                firstName: correctInput.data.firstName,
                lastName: correctInput.data.lastName,
                umur: correctInput.data.umur
            }
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['An error occurred']
                }
            }
        }
    }

    revalidatePath('/dashboard/admin/gigolo')
    return {
        errors: {}
    }
}

export async function deleteGigolo(id: number) {
    await db.gigolo.delete({
        where: { id }
    })

    revalidatePath('/dashboard/admin/gigolo')
}