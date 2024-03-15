// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bKkedi8uLGBLokr7oZ_txm80qCCaE4I",
  authDomain: "udemy-d3-b699d.firebaseapp.com",
  projectId: "udemy-d3-b699d",
  storageBucket: "udemy-d3-b699d.appspot.com",
  messagingSenderId: "852464180558",
  appId: "1:852464180558:web:c4725f1e07f7174e8d521f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



