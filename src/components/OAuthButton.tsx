import { Button } from './ui/button';

export default function OAuthButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button onClick={() => {}} className="w-full mt-2">
      {children}
    </Button>
  );
}
