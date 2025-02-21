import { Open_Sans, Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

export { openSans, roboto };
