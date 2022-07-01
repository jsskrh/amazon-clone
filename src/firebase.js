import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy5iKpQyreDMPGb374qh4cEn42indwcgo",
  authDomain: "clone-b036c.firebaseapp.com",
  projectId: "clone-b036c",
  storageBucket: "clone-b036c.appspot.com",
  messagingSenderId: "818001070168",
  appId: "1:818001070168:web:b6d09865338532285ce22d",
  measurementId: "G-NYJZKSEQVY",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
