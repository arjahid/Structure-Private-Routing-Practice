// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeI822VcEBsMLHLnLxfwO8VKQv9nWH6Zw",
  authDomain: "new-practice-e1b49.firebaseapp.com",
  projectId: "new-practice-e1b49",
  storageBucket: "new-practice-e1b49.firebasestorage.app",
  messagingSenderId: "797095470375",
  appId: "1:797095470375:web:5db66025cf7f856ae23502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);