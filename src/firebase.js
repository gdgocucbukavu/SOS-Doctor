// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBcNUuB5BHd6639i0N5nFsXEnKYN_vz65s",
  authDomain: "sosdokta-auth.firebaseapp.com",
  projectId: "sosdokta-auth",
  storageBucket: "sosdokta-auth.appspot.com",
  messagingSenderId: "529745531968",
  appId: "1:529745531968:web:4b3185988149186a8afba5",
  measurementId: "G-ZELLFQS611",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
