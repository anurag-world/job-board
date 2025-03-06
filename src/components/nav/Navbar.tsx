import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import AuthButtons from './authButtons';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="mr-[2px] flex justify-between">
          {/* Heading */}
          <Link href="/">
            <Typography variant="h6">KodeBloc Jobs</Typography>
          </Link>

          {/* Auth Buttons */}
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
