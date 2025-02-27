import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ mr: 2 }}>
          <Link href="/" className="flex-grow">
            <Typography variant="h6" component="div">
              KodeBloc Jobs
            </Typography>
          </Link>
          <Button
            variant="contained"
            href="/login"
            size="small"
            sx={{
              background: '#C7E1F7',
              color: '#333',
              textTransform: 'capitalize',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-roboto)',
              fontWeight: '500',
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            href="/signup"
            sx={{
              ml: 1,
              background: '#C7E1F7',
              color: '#333',
              textTransform: 'capitalize',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-roboto)',
              fontWeight: '500',
            }}
            size="small"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
