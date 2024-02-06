// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApzQyOSgp5TnugZXJEReGC4_7XQffJwqM",
  authDomain: "maven-d02d1.firebaseapp.com",
  projectId: "maven-d02d1",
  storageBucket: "maven-d02d1.appspot.com",
  messagingSenderId: "1005617182114",
  appId: "1:1005617182114:web:d0c674ce02e6e340e06efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };