import * as yup from 'yup';

import { NewPasswordValidator } from 'shared/helpers';

const newPasswordValidator = yup
  .string()
  .required('Password confirm is required.')
  .test('new-password-validator', 'Invalid password.', value =>
    NewPasswordValidator(value),
  );

export default newPasswordValidator;
