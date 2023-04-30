/** Components */
import Header from '@components/Header';
import Footer from '@components/Footer';

interface LayoutProps {
  className: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => (
  <main className={`flex flex-col w-full h-full ${className} font-sans`}>
    <Header />
    <div className="relative flex-1 w-full px-4 mx-auto max-w-6xl">
      {children}
    </div>
    <Footer />
  </main>
);

export default Layout;
