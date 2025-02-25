import detailMock from '@/data/detailMock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${detailMock.data[0].job_title} - ${detailMock.data[0].employer_name}`,
};

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
