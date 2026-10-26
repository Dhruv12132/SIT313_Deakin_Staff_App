 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNmu8HqXyp21IVr9mgsAz0kLzM2VWcSs8",
  authDomain: "sit313-b89a2.firebaseapp.com",
  projectId: "sit313-b89a2",
  storageBucket: "sit313-b89a2.firebasestorage.app",
  messagingSenderId: "104409158305",
  appId: "1:104409158305:web:78c3a41bcd18dbaeb616e0",

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     prompt: 'select_account' })
        export const auth = getAuth();
        export async function signinwithgoogle(){
            return await signInWithPopup(auth, provider)
        }
    


