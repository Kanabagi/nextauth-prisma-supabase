import { z } from 'zod';
import { uploadFiles } from '@/lib/uploadthing'; // Path sesuai dengan lokasi uploadthing.ts
import { Actress} from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { CreateTalentState } from '@/interfaces';
import { db } from '@/db';

const createTalentSchema = z.object({
  namaAktris: z.string().min(3),
  umur: z.string().min(1).max(2),
  topic: z.string().min(3),
});

export async function createTalent(formState: CreateTalentState, formData: FormData): Promise<CreateTalentState> {
  const correctInput = createTalentSchema.safeParse({
    namaAktris: formData.get('namaAktris'),
    umur: formData.get('umur'),
    topic: formData.get('topic'),
  });

  const fetchImage = formData.get('imageUrl') as File;

  if (!correctInput.success) {
    return {
      errors: correctInput.error.flatten().fieldErrors,
      submitSuccess: false
    };
  }

  let actress: Actress;
  try {
    console.log('Starting image upload...');
    // Upload gambar dan dapatkan URL gambar
    const uploadedFiles = await uploadFiles("imageUploader", {
      files: [fetchImage]
    });
    console.log('Image uploaded:', uploadedFiles);

    const imageUrl = uploadedFiles[0].url; // Use the correct property for the URL

    console.log('Creating talent in DB with:', {
      name: correctInput.data.namaAktris,
      image: imageUrl,
      umur: correctInput.data.umur,
      slug: correctInput.data.topic,
    });

    actress = await db.actress.create({
      data: {
        namaAktris: correctInput.data.namaAktris,
        imageUrl: imageUrl,
        umur: correctInput.data.umur,
        topic: correctInput.data.topic,
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

  
  return {
    errors: {},
    submitSuccess: true
  };
}
