import { AppProps } from 'next/app';
import '@/styles/global.css';
import Layout from '@/app/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
