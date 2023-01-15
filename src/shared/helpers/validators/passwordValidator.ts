import * as yup from 'yup';

const passwordValidator = yup.string().required('Password is required.');

export default passwordValidator;
