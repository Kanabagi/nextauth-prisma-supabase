'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import OAuthButton from '../OAuthButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'Email is required' }),

  password: z.string().min(1, { message: 'Password is required' }).min(8, {
    message: 'Password must be at least 8 characters',
  }),
});

export default function SignInForm() {
  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    } else {
      router.push('/admin/dashboard');
      router.refresh();
    }
  };

  return (
    <Form {...form}>
      <h1 className="text-2xl font-bold mb-2 pb-2 border-b border-black">
        Sign In
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johnd@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-6 bg-blue-600 text-gray-50">
          Sign in
        </Button>
      </form>
      <p className="text-center my-4">or</p>
      <OAuthButton>Sign in with Google</OAuthButton>
      <p className="text-sm mt-2">
        Dont have an account?{' '}
        <Link
          href="/signup"
          className="text-blue-600 font-bold hover:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    </Form>
  );
}
