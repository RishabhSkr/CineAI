// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC92m7H8XwaR_aJP9iQcFEUkBABc31EyaY",
  authDomain: "netflixgpt-92d99.firebaseapp.com",
  projectId: "netflixgpt-92d99",
  storageBucket: "netflixgpt-92d99.appspot.com",
  messagingSenderId: "970632731957",
  appId: "1:970632731957:web:d1207549b359fd46a8007c",
  measurementId: "G-M5E4QP61HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

