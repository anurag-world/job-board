import { CompanyCardProps } from '@/types/Job';
import { truncateString } from '@/functions/strings';
import RemoteCard from './RemoteCard';

interface RemoteCardContainerProps {
  data: CompanyCardProps[];
}

export default function RemoteCardContainer({
  data,
}: RemoteCardContainerProps) {
  return (
    <>
      {data.map(
        (company) =>
          company.employer_logo !== null &&
          company.job_publisher === 'LinkedIn' && (
            <RemoteCard
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
