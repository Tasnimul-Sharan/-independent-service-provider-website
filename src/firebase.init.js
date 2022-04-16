// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdjV7r1hrX474hdqakOu8STQSDb17Weh0",
  authDomain: "independent-service-prov-ba570.firebaseapp.com",
  projectId: "independent-service-prov-ba570",
  storageBucket: "independent-service-prov-ba570.appspot.com",
  messagingSenderId: "935026682518",
  appId: "1:935026682518:web:3e18ff6de14030d145f0b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
