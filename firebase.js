// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBOhvxlX91IypMAg3eGIsEKjJtIBGHqx_U",
  authDomain: "bank-cd49d.firebaseapp.com",
  projectId: "bank-cd49d",
  storageBucket: "bank-cd49d.firebasestorage.app",
  messagingSenderId: "260555104650",
  appId: "1:260555104650:web:683bebc23eb09b97cfa873",
  databaseURL: "https://bank-cd49d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };