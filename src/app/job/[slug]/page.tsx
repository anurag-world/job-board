'use client';

import { useEffect, useState } from 'react';
import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import formatJobDescription from './formatJobDescription';
import JobDetailHeading from './JobDetailHeading';

export default function JobDetail() {
  const [data, setData] = useState<JobDetailProps>();
  const [favorites, setFavorites] = useState<boolean>(false);

  useEffect(() => {
    setData(detailMock.data[0]);
  }, []);

  // Set favorites
  const handleFavorites = (): void => {
    setFavorites((favorites) => !favorites);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center my-20 gap-4">
      {/* Job Heading */}
      <JobDetailHeading
        data={data}
        favorites={favorites}
        handleFavorites={handleFavorites}
      />

      {/* Job Description */}
      <section className="w-1/2">
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            background: 'white',
          }}
          className="shadow"
        >
          <CardContent sx={{ p: '24px' }}>
            <h2 className="font-roboto text-lg font-bold">Job Description </h2>
            {data.job_description ? (
              <div>{formatJobDescription(data.job_description)}</div>
            ) : (
              <p>No description available.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
