import DashboardContent from '@/components/DashboardContent';
import NavbarUser from '@/components/NavbarUser';
import SideNav from '@/components/SideNav';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  //bisa pake ini atau bisa pake middleware

  // if (!session?.user) {
  //   redirect('/signin');
  // }

  return (
    <div className='min-h-screen flex bg-[#e9effd]'>
      <SideNav />

      <div className='flex-1 flex flex-col p-16 py-10 gap-4'>
        <NavbarUser />

        <DashboardContent />
      </div>
    </div>
  )
}
