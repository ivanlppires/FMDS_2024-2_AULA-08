// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "fmds-aula7.firebaseapp.com",
  projectId: "fmds-aula7",
  storageBucket: "fmds-aula7.appspot.com",
  messagingSenderId: "292690573835",
  appId: "1:292690573835:web:26575dfdfef7e846d5250e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;