import * as yup from 'yup';

import { EmailValidator } from 'shared/helpers';

const emailValidator = yup
  .string()
  .required('Email is required.')
  .test('email-validator', 'Invalid email format.', value =>
    EmailValidator(value),
  );

export default emailValidator;
