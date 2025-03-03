// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBV08j4eW2xreRxtOQmD1LeI4i_zzzNJFY',
  authDomain: 'kodebloc-jobs.firebaseapp.com',
  projectId: 'kodebloc-jobs',
  storageBucket: 'kodebloc-jobs.firebasestorage.app',
  messagingSenderId: '986588775395',
  appId: '1:986588775395:web:d24d301b5e4f0ce022d6d6',
  measurementId: 'G-DT4LGKXHWB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
