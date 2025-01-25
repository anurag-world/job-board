import { JobProps } from '@/types/Job';

interface JobTitleTagsProps {
  data: JobProps[];
}

export default function JobTitleTags({ data }: JobTitleTagsProps) {
  return (
    <div className="flex flex-col items-center mt-7 mb-12 px-4">
      <h1 className="font-roboto text-2xl font-semibold tracking-wide text-blue-700 mb-6">
        Find Jobs by Title
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-2 container">
        {data.map((job) => (
          <div
            className="font-open-sans text-xs font-bold text-gray-900 border-2 border-solid border-gray-200 px-3 py-2 rounded-full"
            key={job.job_id}
          >
            {job.job_title}
          </div>
        ))}
      </div>
    </div>
  );
}
