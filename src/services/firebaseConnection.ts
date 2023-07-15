import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ8491GtDxxJbQk8Da-jpAwXHTRaUwhvE",
  authDomain: "devlinks-f3c93.firebaseapp.com",
  projectId: "devlinks-f3c93",
  storageBucket: "devlinks-f3c93.appspot.com",
  messagingSenderId: "378500669883",
  appId: "1:378500669883:web:dc272ced89068e69d7249e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
