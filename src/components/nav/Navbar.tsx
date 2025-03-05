import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import AuthButtons from './authButtons';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ mr: 2 }}>
          <Link href="/" className="flex-grow">
            <Typography variant="h6">KodeBloc Jobs</Typography>
          </Link>

          {/* Auth Buttons */}
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
