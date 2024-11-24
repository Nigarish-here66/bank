
import { initializeApp } from "firebase/app";  
import { getAuth } from 'firebase/auth';  
import { getDatabase } from "firebase/database";  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhvxlX91IypMAg3eGIsEKjJtIBGHqx_U",  // Allows access to Firebase services
  authDomain: "bank-cd49d.firebaseapp.com",  // Authentication domain for Firebase
  projectId: "bank-cd49d",  // Firebase project ID
  storageBucket: "bank-cd49d.firebasestorage.app",  // Firebase storage bucket
  messagingSenderId: "260555104650",  // Sender ID for Firebase messaging
  appId: "1:260555104650:web:683bebc23eb09b97cfa873",  // Firebase app ID
  databaseURL: "https://bank-cd49d-default-rtdb.firebaseio.com"  // URL for the Firebase Realtime Database
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);  

// Initialize Firebase Authentication and Firebase Realtime Database
const auth = getAuth(app);  
const database = getDatabase(app);  

// Export the authentication and database instances so they can be used elsewhere in the app
export { auth, database };
