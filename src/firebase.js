import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyC92pdhDKBYpnTA7C9gu5ZEM5eOVIc0jqk",
  authDomain: "pvt-ex4-signets-mr.firebaseapp.com",
  projectId: "pvt-ex4-signets-mr",
  storageBucket: "pvt-ex4-signets-mr.appspot.com",
  messagingSenderId: "294710579138",
  appId: "1:294710579138:web:6499aa3405e61df85c105b"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
