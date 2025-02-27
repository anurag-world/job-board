import { Typography } from '@mui/material';

export default function Header() {
  return (
    <header className="w-full text-center mt-20">
      <Typography
        component="h1"
        sx={{
          fontFamily: 'var(--font-roboto)',
          fontSize: '3rem',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '0.05em',
          mx: 'auto',
          mb: '1.5rem',
        }}
        color="primary"
      >
        Your Dream Job Awaits!
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-open-sans)',
          fontSize: '1.25rem' /* 20px */,
          lineHeight: '1.75rem' /* 28px */,
          fontStyle: 'italic',
          fontWeight: 500,
          mb: '1.75rem' /* 28px */,
        }}
        color="textSecondary"
      >
        Discover thousands of opportunities tailored to your skills and
        aspirations.
      </Typography>
    </header>
  );
}
