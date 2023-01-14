import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
} from 'firebase/auth';

import { ContextData } from 'domains/Auth/types';

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider: React.FC = ({ children }: any) => {
  const authFirebase = getAuth();
  const [user, setUser] = useState<User>();

  const signInWithEmailAndPassword = useCallback(async () => {
    await signInWithEmailAndPasswordFirebase(authFirebase, 'user', 'password');
  }, [authFirebase]);

  const createUserWithEmailAndPassword = useCallback(async () => {
    await createUserWithEmailAndPasswordFirebase(
      authFirebase,
      'user',
      'password',
    );
  }, [authFirebase]);

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(
      authFirebase,
      user => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
        } else {
          // User is signed out
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
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
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
