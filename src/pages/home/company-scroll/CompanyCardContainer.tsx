import React from 'react';
import CompanyCard from './CompanyCard';
import { JobProps } from '@/types/Job';
import { truncateString } from '@/functions/strings';

interface CompanyCardContainerProps {
  data: JobProps[];
}

export default function CompanyCardContainer({
  data,
}: CompanyCardContainerProps) {
  return (
    <>
      {data.map(
        (company) =>
          company.employer_logo !== null && (
            <CompanyCard
              key={company.job_id}
              employer_name={truncateString(company.employer_name, 30)}
              employer_logo={company.employer_logo}
              job_title={truncateString(company.job_title, 34)}
            />
          )
      )}
    </>
  );
}
