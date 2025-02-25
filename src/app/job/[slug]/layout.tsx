import { notFound } from 'next/navigation';
import detailMock from '@/data/detailMock';
import { JobDetailProps } from '@/types/Job';
import { split } from 'lodash';

export function getJobId(slug: string) {
  const slugArr = split(slug, '-');
  return slugArr[slugArr.length - 1];
}

export async function getJobDetail(id: string): Promise<JobDetailProps> {
  const res = detailMock.data.find((job) => job.job_id === id);
  if (!res) notFound();
  return res;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = getJobId(slug);
  const data = await getJobDetail(decodeURIComponent(id));

  return {
    title: `${data.job_title} - ${data.employer_name}`,
  };
}

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
