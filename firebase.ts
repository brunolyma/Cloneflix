// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzPCa1B5-Tzg8M53yWZ80_-hLSQ0qANo",
  authDomain: "cloneflix-e0a57.firebaseapp.com",
  projectId: "cloneflix-e0a57",
  storageBucket: "cloneflix-e0a57.appspot.com",
  messagingSenderId: "142804476961",
  appId: "1:142804476961:web:dafe73b3ce764e1f306f60",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
