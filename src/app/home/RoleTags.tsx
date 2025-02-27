import rolesData from '@/data/rolesData';
import { Typography } from '@mui/material';

export default function RoleTags() {
  return (
    <div className="container mx-auto">
      <Typography
        component="h1"
        className="text-2xl font-roboto font-extrabold mb-1 capitalize"
        color="textPrimary"
      >
        Search by Popular Roles
      </Typography>
      <Typography
        component="h2"
        className="font-roboto font-medium text-lg mb-6"
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
