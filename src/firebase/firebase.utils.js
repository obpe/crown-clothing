import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYVrZw2lDLqiXQlissTJnPInZvJ57wYWg",
    authDomain: "crown-db-6e532.firebaseapp.com",
    projectId: "crown-db-6e532",
    storageBucket: "crown-db-6e532.appspot.com",
    messagingSenderId: "695632947967",
    appId: "1:695632947967:web:13d0c554fa3d478b5afaca",
    measurementId: "G-L44JTDBY86"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
