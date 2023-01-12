import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt2pjQzK6Lzf5DBUfItXkFNov5xCOrmmM",
  authDomain: "fir-d0fad.firebaseapp.com",
  projectId: "fir-d0fad",
  storageBucket: "fir-d0fad.appspot.com",
  messagingSenderId: "466573867570",
  appId: "1:466573867570:web:a0f63ecee17b9e5d4f28ae",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
