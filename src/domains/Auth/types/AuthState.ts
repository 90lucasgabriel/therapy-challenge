import User from 'domains/Auth/types/User';

type AuthState = {
  token: string;
  user: User;
};

export default AuthState;
