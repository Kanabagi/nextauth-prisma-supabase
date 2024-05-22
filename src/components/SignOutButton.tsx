'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

export default function SignOutButton() {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/signin`,
        })
      }
      variant="destructive"
    >
      Sign out
    </Button>
  );
}
