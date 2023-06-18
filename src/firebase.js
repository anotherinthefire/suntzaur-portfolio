// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4OSPKfHhe67N6tspJGUWNZ0OMaCKXBc",
  authDomain: "auth-portfolio-5a26b.firebaseapp.com",
  projectId: "auth-portfolio-5a26b",
  storageBucket: "auth-portfolio-5a26b.appspot.com",
  messagingSenderId: "366737038273",
  appId: "1:366737038273:web:5ee711895be1bf28562d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);