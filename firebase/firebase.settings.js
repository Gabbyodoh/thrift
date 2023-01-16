// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { fireBaseApiKey } from "./firebase.key";
import { getAuth } from 'firebase/auth';
import { getFirestore}  from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: fireBaseApiKey,
  authDomain: "thrift-9243b.firebaseapp.com",
  projectId: "thrift-9243b",
  storageBucket: "thrift-9243b.appspot.com",
  messagingSenderId: "135724863555",
  appId: "1:135724863555:web:835760d3b0f5e1bc4bc4f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export {authentication,db}

