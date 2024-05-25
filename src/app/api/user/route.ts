import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import * as z from 'zod';
import { db } from '@/db';
import { toast } from 'sonner';

const userSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username is required' })
    .max(50, { message: 'Username must be less than 50 characters' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Username can only contain letters, numbers, and underscores',
    }),
  email: z
    .string()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    }),
});

export async function POST(req: NextRequest) {

  const body = await req.json();

  const { username, email, password } = userSchema.parse(body);

  // check if email already exists
  const existingEmail = await db.user.findUnique({
    where: {
      email: email
    }
  })

  if (existingEmail) {
    return toast.error('Email already exists');
  }

  const existingUsername = await db.user.findUnique({
    where: {
      username: username
    }
  })

  if (existingUsername) {
    return toast.error('Username already exists');
  }

  // hash password use bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // except password
    const { password: exceptPassword, ...rest } = newUser;

    return NextResponse.json({
      status: 201,
      user: rest,
      message: 'User created successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Extracting and formatting error messages
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return NextResponse.json({
        status: 400,
        errors: errorMessages,
        message: 'Validation error',
      });
    }

    return NextResponse.json({
      status: 500,
      message: 'Internal server error',
    });
  }
}
