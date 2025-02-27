import { truncateString } from '@/lib/functions/strings';
import { DataJobProps } from '@/types/Data';
import { Chip, Typography } from '@mui/material';
import Link from 'next/link';

export default function JobTitleTags({ data }: DataJobProps) {
  return (
    <div className="flex flex-col items-center mt-7 mb-12 px-4">
      <Typography
        component="h1"
        className="font-roboto text-2xl font-extrabold tracking-wide mb-6 capitalize"
        color="primary"
      >
        Find Jobs by Title
      </Typography>

      <div className="container flex flex-wrap justify-center gap-3">
        {data.map((job) => (
          <Link href="/" key={job.job_id}>
            <Chip
              label={truncateString(job.job_title, 38)}
              variant="outlined"
              className="font-open-sans font-medium shadow hover:shadow-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
