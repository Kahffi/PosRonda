// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyJ4xEo36_EzvGZP3qqOu10mtO3Jlsxpg",
  authDomain: "posronda-firebase.firebaseapp.com",
  databaseURL:
    "https://posronda-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "posronda-firebase",
  storageBucket: "posronda-firebase.firebasestorage.app",
  messagingSenderId: "502531634781",
  appId: "1:502531634781:web:725a06df3f19c2d373bfb4",
  measurementId: "G-GBB8PQWWJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
