import firebase from "firebase/app";
import 'firebase/firebase';

const firestore = firebase.firestore();

firestore
    .collection('users')
    .doc('ejyk2AqjuWO6eI8V7LX9')
    .collection('cartItems')
    .doc('ldRGHrAHRCUQYVm4Rdai')