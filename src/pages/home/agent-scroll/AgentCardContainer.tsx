import { JobProps } from '@/types/Job';
import { truncateString } from '@/functions/strings';
import AgentCard from './AgentCard';

interface AgentCardContainerProps {
  data: JobProps[];
}

export default function AgentCardContainer({ data }: AgentCardContainerProps) {
  return (
    <>
      {data.map(
        (company) =>
          company.employer_logo !== null &&
          company.job_publisher === 'LinkedIn' && (
            <AgentCard
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
