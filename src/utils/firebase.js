// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhh7ApXusg9UF_60ozb_Pl_85C7zp_HOQ",
  authDomain: "netflixgpt-91214.firebaseapp.com",
  projectId: "netflixgpt-91214",
  storageBucket: "netflixgpt-91214.appspot.com",
  messagingSenderId: "170482163174",
  appId: "1:170482163174:web:38d17b8c45aa345c534a27",
  measurementId: "G-FDBZ9MJ01V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();