import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "rafik-travel.firebaseapp.com",
  projectId: "rafik-travel",
  storageBucket: "rafik-travel.appspot.com",
  messagingSenderId: "940959732864",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-775NKQLLG4"
});

const auth = firebase.auth()
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }

