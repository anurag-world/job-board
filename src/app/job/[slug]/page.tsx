'use client';

import { useEffect, useState } from 'react';
import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';
import JobDetailHeading from './JobDetailHeading';
import JobDetailDesc from './JobDetailDesc';

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
      <JobDetailDesc data={data} />
    </div>
  );
}
