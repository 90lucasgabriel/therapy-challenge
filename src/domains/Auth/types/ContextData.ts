import { EmailPassword } from 'domains/Auth/types';
import { UserCredential, User } from 'firebase/auth';

type ContextData = {
  user?: User;
  isAuthLoading: boolean;
  signInWithEmailAndPassword({
    email,
    password,
  }: EmailPassword): Promise<UserCredential>;
  createUserWithEmailAndPassword({
    email,
    password,
  }: EmailPassword): Promise<UserCredential>;
  signOut(): Promise<void>;
};

export default ContextData;
