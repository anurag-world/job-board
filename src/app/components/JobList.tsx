import React from 'react';
import { Job } from '@/types/Job';
import JobCard from './JobCard';

type Props = {
  jobs: Job[];
};

export default function JobList({ jobs }: Props) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </div>
  );
}
