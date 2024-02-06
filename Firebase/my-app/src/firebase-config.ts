// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Get a reference to the authentication service
export const auth = getAuth(app);

// Get a reference to the Firestore service
export const firestore = getFirestore(app);

// To sign in using google
export const googleProvider = new GoogleAuthProvider();
