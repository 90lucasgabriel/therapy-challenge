import LoginCredentials from './EmailPassword';

type ContextData = {
  user: any;
  signInWithEmailAndPassword({ auth, user, password }: any): Promise<any>;
  createUserWithEmailAndPassword({ auth, user, password }: any): Promise<any>;
  // token?: string;
  // authLoading: boolean;
  // login(loginCredentials: LoginCredentials): Promise<void>;
  // logout(): void;
};

export default ContextData;
