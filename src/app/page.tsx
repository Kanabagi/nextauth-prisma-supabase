import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center w-full'>
      <h1 className="text-[12px] font-bold">Kalo mau masuk dashboard admin harus login dulu mase</h1>
      <Link href="/admin/dashboard" className='text-[12px] font-bold bg-transparent border-2 border-blue-600 px-6 py-2 text-blue-600 hover:!bg-blue-600 hover:!text-gray-50 transition duration-300 rounded-tl-full rounded-br-full'>Login</Link>
    </div>
  );
}
