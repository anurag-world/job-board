import { Typography } from '@mui/material';

export default function Header() {
  return (
    <header className="w-full text-center mt-20">
      <Typography
        component="h1"
        className="font-roboto font-black text-5xl tracking-wider mx-auto mb-6"
        color="info"
      >
        Your Dream Job Awaits!
      </Typography>
      <Typography className="font-open-sans text-xl italic font-medium mb-7">
        Discover thousands of opportunities tailored to your skills and
        aspirations.
      </Typography>
    </header>
  );
}
