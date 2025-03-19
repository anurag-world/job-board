import CompanyCard from './companyCard';
import { DataJobProps } from '@/types/Data';
import { truncateString } from '@/lib/functions/strings';

export default function CompanyCardContainer({ data }: DataJobProps) {
  return (
    <>
      {data.map(
        (company) =>
          company.employer_logo !== null && (
            <CompanyCard
              key={company.job_id}
              job_id={company.job_id}
              employer_name={truncateString(company.employer_name, 30)}
              employer_logo={company.employer_logo}
              job_title={truncateString(company.job_title, 34)}
            />
          )
      )}
    </>
  );
}
