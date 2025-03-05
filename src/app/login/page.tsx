'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase/config';
import { AuthValues } from '@/types/auth';
import { authPageSchema } from '@/validations/authValidations';
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

export default function Login() {
  const [error, setError] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async (
    values: AuthValues,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setSubmitting(false);
      router.push('/'); // Redirect to HomePage
    } catch (err) {
      setError('Username or Password is incorrect');
      console.error((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-3/4 md:w-[600px] border border-solid border-gray-200 p-8 rounded-lg shadow-lg shadow-blue-50">
        {/* Heading */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold uppercase">Sign In</h1>
          <Link
            href="/signup"
            className="text-sm underline font-semibold text-blue-700"
          >
            Register for free
          </Link>
        </div>

        <Divider
          sx={{
            mb: 4,
          }}
        />

        {/* Error Message */}
        {error && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-red-500">{error}</p>
          </div>
        )}

        {/* Form */}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={authPageSchema}
          onSubmit={handleLogin}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
            isValid,
          }) => (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Email input container */}
              <div className="space-y-2">
                <TextField
                  id="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={!!errors.email || !!error}
                  fullWidth
                />

                <p className="text-sm font-semibold text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>

              {/* Password input container */}
              <div className="space-y-2">
                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={!!errors.password || !!error}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end" sx={{ pr: 0.5 }}>
                          <IconButton
                            aria-label={
                              showPassword
                                ? 'hide the password'
                                : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffOutlined
                                sx={{
                                  color: '#9eaab7',
                                }}
                              />
                            ) : (
                              <VisibilityOutlined
                                sx={{
                                  color: '#9eaab7',
                                }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  fullWidth
                />

                <p className="text-sm font-semibold text-red-500">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>

              {/* Submit button */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  py: '0.5rem',
                  fontFamily: 'var(--font-roboto)',
                  fontWeight: 600,
                  fontSize: '1em',
                }}
                disabled={!isValid || !dirty}
                loading={isSubmitting}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>

        <Divider
          sx={{
            mt: 4,
            mb: 2,
          }}
        />

        <p className="font-medium text-center">
          New to KodeBloc?{' '}
          <Link href="/signup" className="font-bold underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
