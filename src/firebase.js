import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import dotenv from 'dotenv'

// dotenv.config()

  const firebaseConfig = {
    apiKey: "AIzaSyAz-84BXsJWBr581s8l5sPwp4AmJ79KFDE",
    authDomain: "netflix-clone-414d4.firebaseapp.com",
    projectId: "netflix-clone-414d4",
    storageBucket: "netflix-clone-414d4.appspot.com",
    messagingSenderId: "679638404396",
    appId: "1:679638404396:web:6fff4ec5260478cce57089",
    measurementId: "G-TEXKMR0RBK"
  };

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID,



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)




  
