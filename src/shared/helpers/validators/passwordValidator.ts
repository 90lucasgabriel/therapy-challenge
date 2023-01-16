import * as yup from 'yup';

const passwordValidator = yup
  .string()
  .required('Password is required.')
  .min(6, 'Password must be at least 6 characters');

export default passwordValidator;
