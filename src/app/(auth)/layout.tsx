export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md h-screen items-center justify-center flex">
      {children}
    </div>
  )
}
