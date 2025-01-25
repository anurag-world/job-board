import React from 'react';
import CompanyCard from './CompanyCard';
import { CompanyCardProps } from '@/types/Job';
import { truncateString } from '@/functions/strings';

interface CompanyCardContainerProps {
  data: CompanyCardProps[];
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
              employer_name={company.employer_name}
              employer_logo={company.employer_logo}
              job_title={truncateString(company.job_title, 34)}
            />
          )
      )}
    </>
  );
}
