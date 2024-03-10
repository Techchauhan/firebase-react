// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBebgpAOPpRzszm_OSWJdFgPEGICWJpLXM",
  authDomain: "testing-first-100f0.firebaseapp.com",
  databaseURL: "https://testing-first-100f0-default-rtdb.firebaseio.com",
  projectId: "testing-first-100f0",
  storageBucket: "testing-first-100f0.appspot.com",
  messagingSenderId: "11180043998",
  appId: "1:11180043998:web:e7d0724573336c03925c4f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);