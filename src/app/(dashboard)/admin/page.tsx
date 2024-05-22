import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  //bisa pake ini atau bisa pake middleware

  // if (!session?.user) {
  //   redirect('/signin');
  // }

  return <div>Admin {session?.user.username}</div>;
}
