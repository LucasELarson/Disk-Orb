// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBItplr1NUnCzNtH1CN31dM725GftTa3cU",
  authDomain: "disk-orb.firebaseapp.com",
  projectId: "disk-orb",
  storageBucket: "disk-orb.appspot.com",
  messagingSenderId: "1051591308245",
  appId: "1:1051591308245:web:3f45756d08b0b34f5c035c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)