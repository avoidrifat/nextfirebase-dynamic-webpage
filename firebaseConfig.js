import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5tBMEa0d_34LOX9y_dE1qb_W3AyK71YE",
  authDomain: "next-auth-crud-41d82.firebaseapp.com",
  projectId: "next-auth-crud-41d82",
  storageBucket: "next-auth-crud-41d82.appspot.com",
  messagingSenderId: "708021151641",
  appId: "1:708021151641:web:f216ea698a5da71da21508"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);