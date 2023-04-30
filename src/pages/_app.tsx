import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
/** Components */
import Layout from '@components/Layout';
/** Styles */
import '@styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={inter.variable}>
      <Component {...pageProps} />
    </Layout>
  );
}
