import { JobProps } from '@/types/Job';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createSlug } from '@/lib/functions/strings';
import { Button } from '@mui/material';

export default function AgentCard({
  job_id,
  employer_name,
  employer_logo,
  job_title,
}: JobProps) {
  // Router hook
  const router = useRouter();

  // Get non-null logo
  let nonNullEmployerLogo = '';

  if (employer_logo !== null) {
    nonNullEmployerLogo = employer_logo;
  }

  // Navigate to the job detail page
  const handleShowJobs = () => {
    const slug = createSlug(`${job_title}-${employer_name}`);
    router.push(`/job/${slug}-${job_id}`);
  };

  return (
    <div className="flex flex-shrink-0 flex-col items-center justify-between gap-2 w-48 border border-solid border-gray-200 rounded-2xl bg-white text-center p-3 shadow hover:shadow-md">
      <span className="block font-roboto font-semibold">{job_title}</span>
      <div className="flex items-center justify-center h-14">
        <Image
          src={nonNullEmployerLogo}
          width={50}
          height={50}
          style={{ height: 'auto' }}
          className="rounded"
          alt="logo"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-[100px] pb-1">
        <span className="block font-open-sans text-sm font-medium mb-4">{`by ${employer_name}`}</span>
        <Button
          onClick={() => handleShowJobs()}
          variant="contained"
          sx={{
            fontFamily: 'var(--font-roboto)',
            fontSize: '0.875rem' /* 14px */,
            lineHeight: '1.25rem' /* 20px */,
            fontWeight: 600,
            borderRadius: '1rem' /* 16px */,
            mx: '0.5rem' /* 8px */,
          }}
        >
          View Jobs
        </Button>
      </div>
    </div>
  );
}
