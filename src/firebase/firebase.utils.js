import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCoMsev5hpO5frWNz74PG7HEMc2xBy2JjQ",
  authDomain: "crwn-db-c0f62.firebaseapp.com",
  projectId: "crwn-db-c0f62",
  storageBucket: "crwn-db-c0f62.appspot.com",
  messagingSenderId: "1071681277531",
  appId: "1:1071681277531:web:78e9135661e5df221db97e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;