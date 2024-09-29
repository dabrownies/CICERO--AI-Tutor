//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: NEXT_FIREBASE_API_KEY,
  authDomain: NEXT_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_FIREBASE_MESSAGING_SENDER_ID,
  appId:NEXT_FIREBASE_APP_ID,
  measurementId: NEXT_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, db, auth };
