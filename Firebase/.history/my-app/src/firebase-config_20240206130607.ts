// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhHgMRsDfVovAyjCmlp36wSGVapkLFXOE",
    authDomain: "h4g-project.firebaseapp.com",
    projectId: "h4g-project",
    storageBucket: "h4g-project.appspot.com",
    messagingSenderId: "238170683202",
    appId: "1:238170683202:web:7b4bb4e4cdfec8a5893adb",
    measurementId: "G-J39YLB6MZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication service
export const auth = getAuth(app);

// Get a reference to the Firestore service
export const firestore = getFirestore(app);

