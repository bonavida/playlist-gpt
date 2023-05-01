import Image from 'next/image';

const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-[#182337] px-4 py-3 w-full">
    <section className="mx-auto max-w-6xl">
      <div className="flex flex-row items-center gap-1.5 text-white text-sm font-light px-2 py-2">
        Developed with{' '}
        <Image
          src="/heart.png"
          alt="Heart pixel art"
          width={20}
          height={20}
          priority
        />{' '}
        by Diego Bonavida
      </div>
    </section>
  </footer>
);

export default Footer;
