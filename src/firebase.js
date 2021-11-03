import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  const firebaseApp = initializeApp(firebaseConfig);


if(!firebaseApp.apiKey) throw new Error("Missing firebase credentials: apiKey");
if(!firebaseApp.authDomain) throw new Error("Missing firebase credentials: ");
if(!firebaseApp.projectId) throw new Error("Missing firebase credentials: ");
if(!firebaseApp.storageBucket) throw new Error("Missing firebase credentials: ");
if(!firebaseApp.messagingSenderId) throw new Error("Missing firebase credentials: ");
if(!firebaseApp.appId) throw new Error("Missing firebase credentials: ");
if(!firebaseApp.measurementId) throw new Error("Missing firebase credentials: ");


export const db = getFirestore(firebaseConfig);
  
