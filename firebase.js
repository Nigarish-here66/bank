// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ugGqGAba8HqZJwvDSQpefcSW2E8OTz0",
  authDomain: "bank-f2c0c.firebaseapp.com",
  projectId: "bank-f2c0c",
  storageBucket: "bank-f2c0c.firebasestorage.app",
  messagingSenderId: "629473970942",
  appId: "1:629473970942:web:75892c6d1e165fff8bb3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };