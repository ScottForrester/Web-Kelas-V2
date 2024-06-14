// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkdvBt2Jtq6WL4ir-RgrxwEKaSj1kPi10",
  authDomain: "web-kelas-66f63.firebaseapp.com",
  projectId: "web-kelas-66f63",
  storageBucket: "web-kelas-66f63.appspot.com",
  messagingSenderId: "14183607189",
  appId: "1:14183607189:web:9ea958a3357f52b927a49c"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();