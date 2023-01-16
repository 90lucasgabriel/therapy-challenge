const NewPasswordValidator = (password: string, callback?: any): boolean => {
  const PASSWORD_ERROR = 'Invalid password.';
  const REGEX =
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]|.*[^A-Za-z]){1,})(.{8,})$/;

  if (!password) {
    if (callback) {
      callback(null);
    }

    return false;
  }

  if (!!password && !REGEX.test(password)) {
    if (callback) {
      callback(PASSWORD_ERROR);
    }

    return false;
  }

  if (callback) {
    callback(null);
  }

  return true;
};

export default NewPasswordValidator;
