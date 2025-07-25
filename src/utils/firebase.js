// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrhlpLzawcBu-N2ksu8T6FPp2edOiOcY0",
  authDomain: "netflix-clone-9b587.firebaseapp.com",
  projectId: "netflix-clone-9b587",
  storageBucket: "netflix-clone-9b587.firebasestorage.app",
  messagingSenderId: "885798563252",
  appId: "1:885798563252:web:aa3144b08fd0defa8656e1",
  measurementId: "G-0439P92W8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();