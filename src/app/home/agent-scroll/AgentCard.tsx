import { JobProps } from '@/types/Job';
import Image from 'next/image';

export default function AgentCard({
  employer_name,
  employer_logo,
  job_title,
}: JobProps) {
  let nonNullEmployerLogo = '';

  if (employer_logo !== null) {
    nonNullEmployerLogo = employer_logo;
  }

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
      <div className="flex flex-col justify-between w-full h-[100px]">
        <span className="block font-open-sans text-sm font-medium mb-4">{`by ${employer_name}`}</span>
        <button className="text-sm font-roboto p-2 bg-sky-100 rounded-2xl text-blue-700 font-semibold">
          View Jobs
        </button>
      </div>
    </div>
  );
}
