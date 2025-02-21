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

export default function JobDetail() {
  const [data, setData] = useState<JobDetailProps>();

  useEffect(() => {
    setData(detailMock.data[0]);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center h-screen mt-20 gap-4">
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
                <h1 className="text-lg font-bold">{data.job_title}</h1>
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
        <p className="font-bold pb-2">Job Description </p>
        <p>{data.job_description}</p>
      </div>

      <Link href="/">Back to Jobs</Link>
    </div>
  );
}
