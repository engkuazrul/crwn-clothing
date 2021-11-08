import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCoMsev5hpO5frWNz74PG7HEMc2xBy2JjQ",
  authDomain: "crwn-db-c0f62.firebaseapp.com",
  projectId: "crwn-db-c0f62",
  storageBucket: "crwn-db-c0f62.appspot.com",
  messagingSenderId: "1071681277531",
  appId: "1:1071681277531:web:78e9135661e5df221db97e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;