'use client';

import { useAuth } from '@/context/AuthContext';
import { Button, Typography } from '@mui/material';

export default function AuthButtons() {
  const { user, logout } = useAuth();
  const buttonStyle = {
    background: '#C7E1F7',
    color: '#333',
    textTransform: 'capitalize',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-roboto)',
    fontWeight: '500',
  };
  return (
    <div className="flex items-center space-x-3">
      {user ? (
        <>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Welcome, {user?.email?.split('@')[0]}
          </Typography>
          <Button
            onClick={logout}
            variant="contained"
            size="small"
            sx={buttonStyle}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            href="/login"
            size="small"
            sx={buttonStyle}
          >
            Login
          </Button>
          <Button
            variant="contained"
            href="/signup"
            sx={buttonStyle}
            size="small"
          >
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
}
