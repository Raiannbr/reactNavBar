import { initializeApp } from "firebase/app";

//import gerFireStore para utilizar la database creada en firebase
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoD6rAVRwhqvnvFoH_C-UhU3cAv6IdELM",
  authDomain: "alianza-f456b.firebaseapp.com",
  projectId: "alianza-f456b",
  storageBucket: "alianza-f456b.appspot.com",
  messagingSenderId: "131324116701",
  appId: "1:131324116701:web:629f49c4669a15310e6534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//variable para igualar el getfirestore, y le pasamos el app que tiene el config
export const db = getFirestore(app)