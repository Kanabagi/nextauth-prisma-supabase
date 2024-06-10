"use server"

import { z } from 'zod';
import { uploadFiles } from '@/lib/uploadthing'; // Path sesuai dengan lokasi uploadthing.ts
import { Wanita } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { CreateTalentState } from '@/interfaces';
import { db } from '@/db';

const createTalentSchema = z.object({
  namaAktris: z.string().min(3),
  umur: z.string().min(1).max(2),
  desc: z.string().min(3).max(200),
  apalah: z.string().min(3),
});

export async function createTalent(formState: CreateTalentState, formData: FormData): Promise<CreateTalentState> {
  const correctInput = createTalentSchema.safeParse({
    namaAktris: formData.get('namaAktris'),
    umur: formData.get('umur'),
    desc: formData.get('desc'),
    apalah: formData.get('apalah'),
  });

  if (!correctInput.success) {
    return {
      errors: correctInput.error.flatten().fieldErrors,
      submitSuccess: false
    };
  }

  const imageUrl = formData.get('imageUrl') as string;

  let actress: Wanita;
  try {

    actress = await db.wanita.create({
      data: {
        namaAktris: correctInput.data.namaAktris,
        imageUrl: imageUrl,
        umur: correctInput.data.umur,
        desc: correctInput.data.desc,
        apalah: correctInput.data.apalah,
      }
    });

    console.log('Talent created:', actress);

  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message]
        }
      };
    } else {
      return {
        errors: {
          _form: ['An error occurred']
        }
      };
    }
  }

  revalidatePath('/dashboard/admin/gigolo')
  return {
    errors: {},
    submitSuccess: true
  };
}

export async function editTalent(id: number, formState: CreateTalentState, formData: FormData): Promise<CreateTalentState> {
  const validation = createTalentSchema.safeParse({
    namaAktris: formData.get('namaAktris'),
    umur: formData.get('umur'),
    desc: formData.get('desc'),
    apalah: formData.get('apalah'),
  })

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      submitSuccess: false
    }
  }

  const imageurl = formData.get('imageUrl') as string

  let wanita: Wanita
  try {
    wanita = await db.wanita.update({
      where: { id },
      data: {
        namaAktris: validation.data.namaAktris,
        imageUrl: imageurl,
        umur: validation.data.umur,
        desc: validation.data.desc,
        apalah: validation.data.apalah
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

  revalidatePath('/dashboard/admin/talent')
  return {
    errors: {},
    submitSuccess: true
  }
}

export async function deleteTalent(id: number) {

  await db.wanita.delete({
    where: {
      id
    }
  })

  revalidatePath('/dashboard/admin/talent')
}
