// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsLcAehwBrBumGqj2ALB6-FAuTzOtU3do",
  authDomain: "sikka-bank.firebaseapp.com",
  projectId: "sikka-bank",
  storageBucket: "sikka-bank.firebasestorage.app",
  messagingSenderId: "1059510390250",
  appId: "1:1059510390250:web:02b97648b5013f58ccf693",
  databaseURL: "https://sikka-bank-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };