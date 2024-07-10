import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { process } from "dotenv";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "netflixgpt-b84c9.firebaseapp.com",
  projectId: "netflixgpt-b84c9",
  storageBucket: "netflixgpt-b84c9.appspot.com",
  messagingSenderId: "612102613858",
  appId: "1:612102613858:web:fea20333bb7d22ecf25a3b",
  measurementId: "G-BNSVH8D6NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
