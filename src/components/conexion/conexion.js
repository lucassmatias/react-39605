import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAU09P01dVP_bno9y1k_kO5Kn6Yyp739MI",
  authDomain: "mangazone-ecommerce.firebaseapp.com",
  projectId: "mangazone-ecommerce",
  storageBucket: "mangazone-ecommerce.appspot.com",
  messagingSenderId: "1094429515300",
  appId: "1:1094429515300:web:2a383dd15cb4535a7702b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;