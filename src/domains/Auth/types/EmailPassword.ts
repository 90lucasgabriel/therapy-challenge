import { Auth } from 'firebase/auth';

type EmailPassword = {
  auth: Auth;
  email: string;
  password: string;
};

export default EmailPassword;
