import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#1d4ed8' }}>
        <Toolbar>
          <Link href="/" className="flex-grow">
            <Typography variant="h6" component="div">
              KodeBloc Jobs
            </Typography>
          </Link>
          <Button variant="contained" href="/login" size="small">
            Login
          </Button>
          <Button
            variant="contained"
            href="/signup"
            sx={{ ml: 1 }}
            size="small"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
