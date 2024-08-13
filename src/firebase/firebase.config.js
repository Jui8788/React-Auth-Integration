// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrdS-lxMLULYKt52SoVbCfLstqkDeb0U",
  authDomain: "react-auth-integration-70ee3.firebaseapp.com",
  projectId: "react-auth-integration-70ee3",
  storageBucket: "react-auth-integration-70ee3.appspot.com",
  messagingSenderId: "831216059580",
  appId: "1:831216059580:web:4615a57332a616b5e9fcb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;
