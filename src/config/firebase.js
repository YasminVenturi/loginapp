import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/firestore"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ti3DH-4DyalXRASAjERk6ESpCP_HSpw",
  authDomain: "login-app-461fe.firebaseapp.com",
  projectId: "login-app-461fe",
  storageBucket: "login-app-461fe.appspot.com",
  messagingSenderId: "765721153351",
  appId: "1:765721153351:web:1b09b46cf12a78e7a0c662"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)       
export const db = getFirestore(app)