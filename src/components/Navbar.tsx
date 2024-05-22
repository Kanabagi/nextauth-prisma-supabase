import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { buttonVariants } from './ui/button';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-300 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Rifky.
        </Link>
        <div className="space-x-8">
          {session?.user ? (
            <SignOutButton />
          ) : (
            <>
              <Link
                href="/signup"
                className={buttonVariants({ variant: 'ghost' })}
              >
                Sign up
              </Link>
              <Link
                href="/signin"
                className={buttonVariants({ variant: 'default' })}
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
