import { Card, CardContent } from '@mui/material';
import formatJobDescription from './formatJobDesc';
import { JobDetailProps } from '@/types/Job';

export interface JobDetailDataProps {
  data: JobDetailProps;
}

export default function JobDetailDesc({ data }: JobDetailDataProps) {
  return (
    <section className="w-1/2">
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
          background: 'white',
        }}
        className="shadow"
      >
        <CardContent sx={{ p: '24px' }}>
          <h2 className="font-roboto text-lg font-bold">Job Description </h2>
          {data.job_description ? (
            <div>{formatJobDescription(data.job_description)}</div>
          ) : (
            <p>No description available.</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
