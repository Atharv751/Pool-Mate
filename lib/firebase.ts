// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9OUjYx3I4q5Pqr7leyydhYtcb4U-O-Zs",
  authDomain: "pool-mate-ec09a.firebaseapp.com",
  projectId: "pool-mate-ec09a",
  storageBucket: "pool-mate-ec09a.firebasestorage.app",
  messagingSenderId: "385843835006",
  appId: "1:385843835006:web:8711f868c43b06e457282f",
  measurementId: "G-5F50M5TKW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);