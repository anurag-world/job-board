import React, { useEffect, useState } from 'react';
import JobList from '@/components/JobList';
import { Job } from '@/types/Job';
import apiClient from '@/utils/apiClient';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get('/search', {
        params: {
          query: 'software developer',
          num_pages: 1,
        },
      })
      .then((response) => {
        setJobs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
