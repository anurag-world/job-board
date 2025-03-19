'use client';

import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { Formik, FormikHelpers } from 'formik';
import { Button, Input } from '@mui/material';
import { authPageSchema } from '@/validations/authValidations';
import { AuthValues } from '@/types/auth';

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = async (
    values: AuthValues,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      setSubmitting(false);
      router.push('/'); // Redirect to homepage after signup
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={authPageSchema}
        onSubmit={handleSignUp}
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
              className="bg-blue-500 text-white py-2 px-4"
              type="submit"
              disabled={!isValid || !dirty}
              loading={isSubmitting}
            >
              Sign Up
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
