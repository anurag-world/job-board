import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { JobDetailProps } from '@/types/Job';

interface JobDetailHeadingProps {
  data: JobDetailProps;
  handleFavorites: () => void;
  favorites: boolean;
}

export default function JobDetailHeading({
  data,
  handleFavorites,
  favorites,
}: JobDetailHeadingProps) {
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
            <IconButton onClick={handleFavorites} aria-label="add to favorites">
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
    </section>
  );
}
