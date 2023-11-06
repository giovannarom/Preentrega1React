import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXKiz4W5kUsvBzvedgAH_yVA9AEFi8h1I",
  authDomain: "ecommerce-pf-60539.firebaseapp.com",
  projectId: "ecommerce-pf-60539",
  storageBucket: "ecommerce-pf-60539.appspot.com",
  messagingSenderId: "638433045601",
  appId: "1:638433045601:web:e5aa31477ceee3b3784e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)