import * as yup from 'yup';

import { passwordValidator, emailValidator } from 'shared/helpers/validators';

const schema = yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

export default schema;
