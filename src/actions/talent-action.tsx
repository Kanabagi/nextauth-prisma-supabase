"use server"

import { z } from 'zod';
import { uploadFiles } from '@/lib/uploadthing'; // Path sesuai dengan lokasi uploadthing.ts
import { Wanita} from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { CreateTalentState } from '@/interfaces';
import { db } from '@/db';

const createTalentSchema = z.object({
  namaAktris: z.string().min(3),
  umur: z.string().min(1).max(2),
  apalah: z.string().min(3),
});

export async function createTalent(formState: CreateTalentState, formData: FormData): Promise<CreateTalentState> {
  const correctInput = createTalentSchema.safeParse({
    namaAktris: formData.get('namaAktris'),
    umur: formData.get('umur'),
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
