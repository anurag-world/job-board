import { truncateString } from '@/lib/functions/strings';
import { DataJobProps } from '@/types/Data';
import { Chip, Typography } from '@mui/material';
import Link from 'next/link';

export default function JobTitleTags({ data }: DataJobProps) {
  return (
    <div className="flex flex-col items-center mt-7 mb-12 px-4">
      <Typography
        component="h1"
        sx={{
          fontFamily: 'var(--font-roboto)',
          fontSize: '1.5rem' /* 24px */,
          lineHeight: '2rem' /* 32px */,
          fontWeight: 800,
          letterSpacing: '0.025em',
          textTransform: 'capitalize',
          mb: '1.5rem' /* 24px */,
        }}
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
              sx={{
                fontFamily: 'var(--font-open-sans)',
                fontWeight: 500,
              }}
              className="shadow hover:shadow-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
