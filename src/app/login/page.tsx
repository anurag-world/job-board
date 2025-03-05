'use client';

import { auth } from '@/lib/firebase/config';
import { AuthValues } from '@/types/auth';
import { authPageSchema } from '@/validations/authValidations';
import { Button, Input } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

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
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
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
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <Input
              className="border p-2"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && errors.email}
            <Input
              className="border p-2"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {errors.password && touched.password && errors.password}
            <Button
              className="bg-green-500 text-white py-2 px-4"
              type="submit"
              disabled={!isValid || !dirty}
              loading={isSubmitting}
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
