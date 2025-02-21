'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';

export default function JobDetail() {
  const [data, setData] = useState<JobDetailProps>();

  useEffect(() => {
    setData(detailMock.data[0]);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="h-screen">
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
        style={{ height: 'auto' }}
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
