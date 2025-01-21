import React from 'react';
import { Job } from '@/types/Job';

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div className="job-card">
      <h3>{job.job_title}</h3>
      <p>{job.employer_name}</p>
      <p>{job.job_country}</p>
    </div>
  );
}
