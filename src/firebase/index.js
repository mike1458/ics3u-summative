import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyBQQgaqxWANvzW14pbJrwDTe1fNGJiuIoc",
    authDomain: "summative-2b486.firebaseapp.com",
    projectId: "summative-2b486",
    storageBucket: "summative-2b486.firebasestorage.app",
    messagingSenderId: "285302048576",
    appId: "1:285302048576:web:be9b30a1e07e71b6741ca5"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };