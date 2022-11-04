// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZHwCaCq2quQpbONXer9_7nkRPOrQrUtc",
  authDomain: "pato-reasturant.firebaseapp.com",
  projectId: "pato-reasturant",
  storageBucket: "pato-reasturant.appspot.com",
  messagingSenderId: "211959871605",
  appId: "1:211959871605:web:9ee9901378f92f6fabe03c",
  measurementId: "G-86XS4HKSSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
