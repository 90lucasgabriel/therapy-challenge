import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { authFirebase } from '../../../../firebaseConfig';
import { ContextData, EmailPassword } from 'domains/Auth/types';

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInWithEmailAndPassword = useCallback(
    async (data: EmailPassword): Promise<UserCredential | any> => {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(
          authFirebase,
          data?.email,
          data?.password,
        );
      } catch (error) {
        console.error(error);
        return error;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleCreateUserWithEmailAndPassword = useCallback(
    async (data: EmailPassword): Promise<UserCredential | any> => {
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(
          authFirebase,
          data?.email,
          data?.password,
        );
      } catch (error) {
        console.error(error);
        return error;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const handleSignOut = useCallback(async (): Promise<void | any> => {
    try {
      setIsLoading(true);
      await signOut(authFirebase);
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
      authFirebase,
      user => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      },
    );

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthLoading: isLoading,
        signInWithEmailAndPassword: handleSignInWithEmailAndPassword,
        createUserWithEmailAndPassword: handleCreateUserWithEmailAndPassword,
        signOut: handleSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): ContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
};

export { AuthProvider, useAuth };
