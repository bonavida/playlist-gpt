import Image from 'next/image';
import { signIn } from 'next-auth/react';
/** Components */
import Button from 'Button';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 h-full p-10">
      <h1 className="text-white font-bold text-5xl mb-8">
        Welcome to Playlist-GPT!
      </h1>
      <p className="text-lg">
        <span className="text-[#1DB954] font-semibold">Playlist-GPT</span>{' '}
        utilizes both the <strong>Chat-GPT API</strong> and the{' '}
        <strong>Spotify API</strong> to create custom playlists on Spotify based
        on a user's input or a specific song.
      </p>
      <p className="text-lg">
        Users can input their favorite genre, mood, or artist, and the website
        generates a unique playlist tailored to their preferences.
      </p>
      <p className="text-lg">
        Alternatively, users can provide a specific song, and the website will
        generate a playlist with similar songs that match the original song's
        style and genre. The website aims to provide a personalized and
        hassle-free music discovery experience for its users.
      </p>
      <Button
        className="flex flex-row items-center gap-2.5 bg-[#1DB954] hover:bg-[#20c95b] rounded w-fit text-slate-800 font-semibold text-lg px-5 py-2 mt-5"
        onClick={() => signIn('spotify')}
      >
        Login to Spotify
        <Image
          src="/spotify.svg"
          alt="Spotify Logo"
          width={20}
          height={20}
          priority
        />
      </Button>
    </section>
  );
}
