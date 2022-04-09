// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1jcrOd-ZpFtSfcsnpXMHIpYufIeU3Jeo",
  authDomain: "ema-john-simple-76422.firebaseapp.com",
  projectId: "ema-john-simple-76422",
  storageBucket: "ema-john-simple-76422.appspot.com",
  messagingSenderId: "279599531045",
  appId: "1:279599531045:web:6ce19d3e2ebffd6704abcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
