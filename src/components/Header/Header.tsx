import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between sticky top-0 z-50 px-4 py-3 w-full mx-auto max-w-6xl">
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
    </header>
  );
};

export default Header;
