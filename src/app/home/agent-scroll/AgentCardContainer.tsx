import { JobProps } from '@/types/Job';
import AgentCard from './AgentCard';
import { truncateString } from '@/lib/functions/strings';

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
              employer_name={truncateString(company.employer_name, 28)}
              employer_logo={company.employer_logo}
              job_title={truncateString(company.job_title, 28)}
            />
          )
      )}
    </>
  );
}
