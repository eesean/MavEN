// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZfyhua9t5nAYYYOxgtLdoZtDJy7CbZWM",
    authDomain: "h4g-project-17dc8.firebaseapp.com",
    projectId: "h4g-project-17dc8",
    storageBucket: "h4g-project-17dc8.appspot.com",
    messagingSenderId: "48610499551",
    appId: "1:48610499551:web:c1dde4fb484afecbd2826a",
    measurementId: "G-DY12LVEKJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication service
export const auth = getAuth(app);

// Get a reference to the Firestore service
export const firestore = getFirestore(app);

