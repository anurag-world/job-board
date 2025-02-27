import rolesData from '@/data/rolesData';
import { Typography } from '@mui/material';

export default function RoleTags() {
  return (
    <div className="container mx-auto">
      <Typography
        component="h1"
        sx={{
          fontFamily: 'var(--font-roboto)',
          fontSize: '1.5rem' /* 24px */,
          lineHeight: '2rem' /* 32px */,
          fontWeight: 800,
          letterSpacing: '0.025em',
          textTransform: 'capitalize',
          mb: '0.25rem' /* 4px */,
        }}
        color="textPrimary"
      >
        Search by Popular Roles
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: 'var(--font-roboto)',
          fontSize: '1.125rem' /* 18px */,
          lineHeight: '1.75rem' /* 28px */,
          fontWeight: 500,
          letterSpacing: '0.025em',
          mb: '1.5rem' /* 24px */,
        }}
        color="textSecondary"
      >
        Select a role to show relevant jobs for it!
      </Typography>
      <div className="grid grid-cols-4 gap-x-4 gap-y-4 pb-12 cursor-pointer">
        {rolesData.map((role, index) => (
          <div
            className="text-center p-4 border border-solid border-gray-200 rounded-2xl shadow hover:shadow-md"
            key={index}
          >
            <span className="font-open-sans font-medium">{role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
