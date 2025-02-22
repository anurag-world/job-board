'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { JobDetailProps } from '@/types/Job';
import detailMock from '@/data/detailMock';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Button, CardActions, Divider, IconButton } from '@mui/material';
import styles from '@/styles/JobDetail.module.css';
import Link from 'next/link';

export default function JobDetail() {
  const [data, setData] = useState<JobDetailProps>();
  const [favorites, setFavorites] = useState<boolean>(false);

  useEffect(() => {
    setData(detailMock.data[0]);
  }, []);

  // Set favorites
  const handleFavorites = (): void => {
    setFavorites((favorites) => !favorites);
  };

  // Clean up job description
  const formatJobDescription = (
    description: string
  ): string | React.ReactElement[] => {
    if (!description) return '';

    const lines = description
      .replace(/\n\n/g, '\n') // Reduce double newlines to a single newline
      .split('\n') // Split into an array
      .filter((line) => line.trim() !== '');

    const formattedContent: React.ReactElement[] = [];
    let bulletPoints: React.ReactElement[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('•')) {
        bulletPoints.push(
          <li className="pb-[2px]" key={index}>
            {line.replace('•', '').trim()}
          </li>
        );
      } else {
        if (bulletPoints.length > 0) {
          formattedContent.push(
            <ul key={`ul-${index}`} className="font-open-sans list-disc pl-5">
              {bulletPoints}
            </ul>
          );
          bulletPoints = [];
        }

        if (
          line.match(/Overview|Key Responsibilities|Required Qualifications/g)
        ) {
          formattedContent.push(
            <h3 key={index} className="font-roboto font-bold mb-2 mt-4">
              {line}
            </h3>
          );
        } else {
          formattedContent.push(
            <p key={index} className={styles.jobText}>
              {line.replaceAll(',', ', ')}
            </p>
          );
        }
      }
    });

    if (bulletPoints.length > 0) {
      formattedContent.push(
        <ul key="ul-last" className="font-open-sans list-disc pl-5">
          {bulletPoints}
        </ul>
      );
    }

    return formattedContent;
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center my-20 gap-4">
      <div className="w-1/2">
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            background: 'white',
          }}
          className="shadow"
        >
          <CardContent sx={{ p: '24px' }}>
            <div className="grid grid-cols-2">
              {/* Title */}
              <div>
                <h1 className="font-roboto text-xl font-bold">
                  {data.job_title}
                </h1>
                <div className="flex items-center mb-4">
                  <p className="font-open-sans text-sm font-medium">
                    {data.employer_name}
                  </p>
                  <Link
                    className="flex items-center"
                    href={data.employer_reviews[0].reviews_link}
                    target="_blank"
                  >
                    <StarOutlinedIcon
                      fontSize="small"
                      color="warning"
                      className="mx-1"
                    />
                    <p className="font-open-sans text-sm font-medium">
                      {data.employer_reviews[0].num_stars.toString()}
                    </p>
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      sx={{ height: 14, m: '0.25rem' }}
                      flexItem
                    />
                    <p className="font-open-sans text-sm font-medium">
                      {`${data.employer_reviews[0].review_count} Reviews`}
                    </p>
                  </Link>
                </div>

                {/* Location */}
                <div className="font-open-sans text-sm mb-1 flex items-center gap-1">
                  <div className="mb-px">
                    <FmdGoodOutlinedIcon fontSize="small" color="action" />
                  </div>
                  <p>{data.job_location}</p>
                </div>

                {/* Employement Type */}
                <div className="font-open-sans text-sm flex items-center gap-1">
                  <div className="mb-px">
                    <WorkOutlineOutlinedIcon fontSize="small" color="action" />
                  </div>
                  <p>{data.job_employment_type}</p>
                </div>
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
          <CardActions
            sx={{ p: '8px 24px 16px' }}
            className="flex justify-between border-t border-solid border-gray-200"
          >
            <div>
              <p className="font-open-sans text-sm">
                {`Posted: `}
                <span className="font-semibold">{data.job_posted_at}</span>
              </p>
            </div>
            <div>
              <Button
                href="/"
                style={{
                  fontFamily: 'var(--font-open-sans)',
                  textTransform: 'capitalize',
                }}
              >
                Back to Jobs
              </Button>
              <IconButton
                onClick={handleFavorites}
                aria-label="add to favorites"
              >
                {favorites ? (
                  <BookmarkBorderOutlinedIcon />
                ) : (
                  <BookmarkOutlinedIcon color="warning" />
                )}
              </IconButton>
              <Button
                sx={{ ml: 1 }}
                href={data.job_apply_link}
                target="_blank"
                variant="contained"
                size="medium"
              >
                Apply
              </Button>
            </div>
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
          <CardContent sx={{ p: '24px' }}>
            <h2 className="font-roboto text-lg font-bold">Job Description </h2>
            {data.job_description ? (
              <div>{formatJobDescription(data.job_description)}</div>
            ) : (
              <p>No description available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
