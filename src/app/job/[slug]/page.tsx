import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';
import JobDetailHeading from './JobDetailHeading';
import JobDetailDesc from './JobDetailDesc';
import { getJobDetail, getJobId } from './layout';

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await detailMock.data;
  return data.map((job: JobDetailProps) => ({
    id: String(job.job_id),
  }));
}

export default async function JobDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const id = getJobId(slug);
  const data = await getJobDetail(decodeURIComponent(id));

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center my-20 gap-4">
      {/* Job Heading */}
      <JobDetailHeading data={data} />

      {/* Job Description */}
      <JobDetailDesc data={data} />
    </div>
  );
}
