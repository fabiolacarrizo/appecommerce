// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKf0GFbwl-yD-JYkTnsB2ic5xK0M3eNic",
  authDomain: "appddtae.firebaseapp.com",
  projectId: "appddtae",
  storageBucket: "appddtae.appspot.com",
  messagingSenderId: "295142519249",
  appId: "1:295142519249:web:997855db85481809d9b0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)