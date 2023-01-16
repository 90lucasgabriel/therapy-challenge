import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const getValidationErrors = (errors: ValidationError): Errors => {
  const validationErrors: Errors = {};

  errors.inner.reverse().forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export default getValidationErrors;
