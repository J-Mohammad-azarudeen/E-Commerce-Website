// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeAysYLpoKOeh7fIHvNjY54vboqPHOLo0",
    authDomain: "login-auth-22f20.firebaseapp.com",
    projectId: "login-auth-22f20",
    storageBucket: "login-auth-22f20.firebasestorage.app",
    messagingSenderId: "930576695163",
    appId: "1:930576695163:web:b4c632f2e290673f3907de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
