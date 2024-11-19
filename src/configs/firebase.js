// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { setCoordinatesData } from "utils/setCoordintatesData";
import { seedCoordinatesData } from "utils/seedCoordinatesData";
import { setPersistence, browserSessionPersistence } from "@firebase/auth";


// Using for Stagin/Production
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Using for Local DB
const firebaseConfig2 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY2,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN2,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID2,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET2,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID2,
  appId: process.env.REACT_APP_FIREBASE_APP_ID2,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID2
};
// Using for Local DB 3
const firebaseConfig3 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY3,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN3,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID3,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET3,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID3,
  appId: process.env.REACT_APP_FIREBASE_APP_ID3,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID2
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig, "app1"); // using firebaseconfig for staging
export const firestore = getFirestore(db);
export const auth = getAuth(db);
setPersistence(auth, browserSessionPersistence);


// const coordArray=
// [
//   [-0.36332130432128756, 51.683239473131174],
//   [-0.36342859268188327, 51.683226169188536],
//   [-0.36345005035400235, 51.68326608100469],
//   [-0.36329984664916837, 51.68327938493557],
//   [-0.36332130432128756, 51.683239473131174]
// ]

// ------------------------------------------
// Seeding single coordinate
// setCoordinatesData(coordArray);

// ------------------------------------
// Seed Mutliple Polygons Data from trf File
// seedCoordinatesData().then(()=>{
//     console.log("COORD ADDED")
//   }).catch((error) => {
//     console.error('Error copying data:', error);
//   });

// -------------------------------------------------
// seedClientVisibility().then(()=>{
//     console.log("DATa Copied")
//   }).catch((error) => {
//     console.error('Error copying data:', error);
//   });

// ---------------------------------------------------
// Iniitialize db2 for seeding markers data
// const db2 = initializeApp(firebaseConfig2,'app2');
// export const firestore2 = getFirestore(db2);
// export const auth2 = getAuth(db);
