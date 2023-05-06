import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
/** Components */
import Button from 'Button';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex flex-row items-center justify-between bg-[#101827] sticky top-0 z-50 px-4 py-4 w-full mx-auto max-w-6xl">
      <Link href="/" className="flex flex-row items-center gap-x-3">
        <Image
          src="/chatgpt_logo.svg"
          alt="Chat-GPT Logo"
          width={32}
          height={32}
          priority
        />
        <span className="text-white font-medium">Playlist-GPT</span>
      </Link>
      {session?.user && (
        <div className="flex flex-row items-center gap-x-3">
          <Image
            src={session.user.image!}
            alt={`Avatar of the Spotify user ${session.user.name}`}
            className="border-2 border-[#1DB954] rounded-full"
            width={32}
            height={32}
            priority
          />
          <Button
            className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 rounded text-white text-sm px-4 py-1"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
