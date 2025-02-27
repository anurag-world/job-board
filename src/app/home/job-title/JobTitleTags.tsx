import { truncateString } from '@/lib/functions/strings';
import { DataJobProps } from '@/types/Data';
import { Chip } from '@mui/material';

export default function JobTitleTags({ data }: DataJobProps) {
  return (
    <div className="flex flex-col items-center mt-7 mb-12 px-4">
      <h1 className="font-roboto text-2xl font-extrabold tracking-wide mb-6">
        Find Jobs by Title
      </h1>

      <div className="container flex flex-wrap justify-center gap-3">
        {data.map((job) => (
          <Chip
            label={truncateString(job.job_title, 40)}
            key={job.job_id}
            variant="outlined"
            className="font-open-sans"
          />
        ))}
      </div>
    </div>
  );
}
