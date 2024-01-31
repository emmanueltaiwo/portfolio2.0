import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcC7vnb4E51GtyPJJyL2PToxgaWGQFjdE",
  authDomain: "portfolio-4c8d9.firebaseapp.com",
  projectId: "portfolio-4c8d9",
  storageBucket: "portfolio-4c8d9.appspot.com",
  messagingSenderId: "341473989151",
  appId: "1:341473989151:web:07988ec0342ab753ddfb2a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);