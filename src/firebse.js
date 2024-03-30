// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzetj_Ds9PMhmEihy7r_0gTwliKT88etQ",
  authDomain: "peak-collective-330116.firebaseapp.com",
  projectId: "peak-collective-330116",
  storageBucket: "peak-collective-330116.appspot.com",
  messagingSenderId: "635307455831",
  appId: "1:635307455831:web:925d596c62a45745e17a12",
  measurementId: "G-X3FLE6EC5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
