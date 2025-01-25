import { JobProps } from '@/types/Job';

interface JobTitleTagsProps {
  data: JobProps[];
}

export default function JobTitleTags({ data }: JobTitleTagsProps) {
  return (
    <div className="flex flex-col items-center mt-7 mb-12 px-4">
      <h1 className="font-roboto text-2xl font-extrabold tracking-wide mb-6">
        Find Jobs by Title
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-3 container">
        {data.map((job) => (
          <div
            className="border border-solid border-gray-200 px-3 py-2 rounded-full cursor-pointer shadow hover:shadow-md"
            key={job.job_id}
          >
            <span className="font-open-sans text-xs font-semibold">
              {job.job_title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
