'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Button, CardActions, IconButton } from '@mui/material';
import styles from '@/styles/JobDetail.module.css';

export default function JobDetail() {
  const [data, setData] = useState<JobDetailProps>();

  useEffect(() => {
    setData(detailMock.data[0]);
  }, []);

  const formatJobDescription = (description: string) => {
    if (!description) return '';

    return description
      .replace(/\n\n/g, '\n') // Reduce double newlines to a single newline
      .split('\n') // Split into an array
      .filter((i) => i)
      .map((line, index) => {
        if (
          line.match(/Overview|Key Responsibilities|Required Qualifications/g)
        )
          return (
            <h3 key={index} className="font-roboto font-bold mb-2 mt-4">
              {line}
            </h3>
          );

        if (line.startsWith('•'))
          return (
            <li key={index} className="font-open-sans">
              {line.replace('•', '').trim()}
            </li>
          );

        return (
          <p key={index} className={styles.jobText}>
            {line}
          </p>
        );
      });
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      <div className="w-1/2">
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            background: 'white',
          }}
          className="shadow"
        >
          <CardContent sx={{ p: '24px 24px 0' }}>
            <div className="grid grid-cols-2">
              {/* Title */}
              <div>
                <h1 className="font-roboto text-lg font-bold">
                  {data.job_title}
                </h1>
                <p className="font-open-sans text-sm font-medium mb-4">
                  {data.employer_name}
                </p>

                {/* Location */}
                <p className="font-open-sans text-sm mb-1 flex items-center gap-1">
                  <span className="font-semibold">
                    <FmdGoodOutlinedIcon
                      fontSize="small"
                      className="mb-[1px]"
                      color="action"
                    />
                  </span>
                  {data.job_location}
                </p>

                {/* Employement Type */}
                <p className="font-open-sans text-sm mb-1 flex items-center gap-1">
                  <span className="font-semibold">
                    <WorkOutlineOutlinedIcon
                      fontSize="small"
                      className="mb-[1px]"
                      color="action"
                    />
                  </span>
                  {data.job_employment_type}
                </p>
              </div>

              {/* Logo */}
              <div className="justify-self-end">
                <Image
                  src={data.employer_logo}
                  alt={data.employer_name}
                  width={50}
                  height={50}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
          </CardContent>
          <CardActions sx={{ p: '8px 24px' }} className="justify-end">
            <IconButton aria-label="add to favorites">
              <BookmarkBorderOutlinedIcon />
            </IconButton>
            <Button variant="contained" size="medium">
              Apply
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="w-1/2">
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            background: 'white',
          }}
          className="shadow"
        >
          <CardContent sx={{ p: '24px 24px 0' }}>
            <h2 className="font-roboto text-lg font-bold">Job Description </h2>
            {data.job_description ? (
              <div>{formatJobDescription(data.job_description)}</div>
            ) : (
              <p>No description available.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Link href="/">Back to Jobs</Link>
    </div>
  );
}
