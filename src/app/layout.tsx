import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { openSans, roboto } from '@/lib/fonts';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import AuthProvider from '@/context/AuthContext';

export const metadata: Metadata = {
  title: {
    default: 'Job Finder: KodeBloc',
    template: '%s | KodeBloc Jobs',
  },
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
