import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import detailMock from '@/data/detailMock';
import Image from 'next/image';
import Link from 'next/link';
import { type JobDetail } from '@/types/Job';
import Head from 'next/head';

export const getServerSideProps = (async () => {
  // const { id } = context.query;
  // Fetch data from external API
  const data: JobDetail = detailMock.data[0];
  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}) satisfies GetServerSideProps<{ data: JobDetail }>;

export default function JobDetail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{`${data.job_title} - ${data.employer_name}: KodeBloc Jobs`}</title>
      </Head>
      <h1>{data.job_title}</h1>
      <p>
        <strong>Company: </strong>
        {data.employer_name}
      </p>
      <Image
        src={data.employer_logo}
        alt={data.employer_name}
        width={50}
        height={50}
      />
      <p>
        <strong>Location: </strong>
        {data.job_location}
      </p>
      <p>
        <strong>Employment Type: </strong>
        {data.job_employment_type}
      </p>
      <p>
        <strong>Description: </strong>
        {data.job_description}
      </p>
      <div>
        <a href={data.job_apply_link} target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      </div>
      <Link href="/">Back to Jobs</Link>
    </div>
  );
}
