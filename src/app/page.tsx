import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Home</h1>
      <Link href="/admin">Admin</Link>
    </div>
  );
}
