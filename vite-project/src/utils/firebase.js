import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKdRP3TH2IebeWUmloqFdNkmNSkBtrG0",
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
const auth = getAuth();

export { auth };
