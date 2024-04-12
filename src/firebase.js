// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMfMv1Nt3sJXxK2capGsS9teWj9ZB0Fz4",
    authDomain: "todo-81d5e.firebaseapp.com",
    projectId: "todo-81d5e",
    storageBucket: "todo-81d5e.appspot.com",
    messagingSenderId: "469294343905",
    appId: "1:469294343905:web:33817751fa952b85ebf9a0",
    measurementId: "G-6NSRMPE8E2",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
