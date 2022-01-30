import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "rafik-travel.firebaseapp.com",
  projectId: "rafik-travel",
  storageBucket: "rafik-travel.appspot.com",
  messagingSenderId: "940959732864",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-775NKQLLG4"
});

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage }

