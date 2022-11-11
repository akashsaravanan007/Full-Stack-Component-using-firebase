// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL3RHXEVrzmgUKmEmJiR1rlX-npr6n44M",
  authDomain: "react-ui-list.firebaseapp.com",
  projectId: "react-ui-list",
  storageBucket: "react-ui-list.appspot.com",
  messagingSenderId: "53077922916",
  appId: "1:53077922916:web:3d8eff9a6444db8146fb71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)