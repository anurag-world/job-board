import { object, string } from 'yup';

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const authPageSchema = object({
  email: string().required('Please enter a valid email').email(),
  password: string()
    .required('Please enter a valid password')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      passwordRules,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
    ),
});
