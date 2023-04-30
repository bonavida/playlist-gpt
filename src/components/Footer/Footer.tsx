/** Styles */
const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-[#182337] px-4 py-3 w-full">
    <section className="mx-auto max-w-6xl">
      <span className="text-white text-sm font-light px-2 py-2">
        Diego Bonavida · {new Date().getFullYear()}
      </span>
    </section>
  </footer>
);

export default Footer;
