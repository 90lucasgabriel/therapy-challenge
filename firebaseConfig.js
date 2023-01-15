import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import ENV from 'react-native-config';

const firebaseConfig = {
  apiKey: `${ENV?.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${ENV?.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${ENV?.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${ENV?.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${ENV?.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${ENV?.REACT_APP_FIREBASE_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);

export { app, authFirebase, db };
