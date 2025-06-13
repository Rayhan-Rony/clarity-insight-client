// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYaNlX8gtxIpBnHTvnsh07PL0WWZO1qfs",
  authDomain: "clarity-insights-98077.firebaseapp.com",
  projectId: "clarity-insights-98077",
  storageBucket: "clarity-insights-98077.firebasestorage.app",
  messagingSenderId: "283430016426",
  appId: "1:283430016426:web:70225f1a7a2d07dbbdc7d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
