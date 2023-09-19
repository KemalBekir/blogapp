// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-tutorial-398820.firebaseapp.com",
  projectId: "blog-tutorial-398820",
  storageBucket: "blog-tutorial-398820.appspot.com",
  messagingSenderId: "255834638418",
  appId: "1:255834638418:web:f0e6e62895e9454877f78b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);