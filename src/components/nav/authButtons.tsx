'use client';

import { useAuth } from '@/context/AuthContext';
import { Button, Typography } from '@mui/material';
import styles from '@/styles/AuthButtons.module.css';

export default function AuthButtons() {
  const { user, logout } = useAuth();

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
            className={styles.button}
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
            className={styles.button}
          >
            Login
          </Button>
          <Button
            variant="contained"
            href="/signup"
            className={styles.button}
            size="small"
          >
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
}
