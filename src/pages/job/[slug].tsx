import React, { useEffect, useState } from 'react';
import detailMock from '@/data/detailMock';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { type JobDetail } from '@/types/Job';
import Head from 'next/head';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query; // Get company ID from URL

  // Set Job state
  const [job, setJob] = useState<JobDetail>();

  useEffect(() => {
    if (id) {
      const fetchJobDetails = async () => {
        try {
          setJob(detailMock.data[0]);
        } catch (error) {
          console.log('Error fetching job details:', error);
        }
      };

      fetchJobDetails();
    }
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{`${job.job_title} - ${job.employer_name}: KodeBloc Jobs`}</title>
      </Head>
      <h1>{job.job_title}</h1>
      <p>
        <strong>Company: </strong>
        {job.employer_name}
      </p>
      <Image
        src={job.employer_logo}
        alt={job.employer_name}
        width={50}
        height={50}
      />
      <p>
        <strong>Location: </strong>
        {job.job_location}
      </p>
      <p>
        <strong>Employment Type: </strong>
        {job.job_employment_type}
      </p>
      <p>
        <strong>Description: </strong>
        {job.job_description}
      </p>
      <div>
        <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      </div>
      <Link href="/">Back to Jobs</Link>
    </div>
  );
}
