import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBrcgyFmlrSN13KXK4DbZTmTOI7Ey_lesc",
    authDomain: "garg-picsgram-152c5.firebaseapp.com",
    projectId: "garg-picsgram-152c5",
    storageBucket: "garg-picsgram-152c5.appspot.com",
    messagingSenderId: "765555677667",
    appId: "1:765555677667:web:d18fa756469e2b204ea8d6"
};
firebase.initializeApp(firebaseConfig)
// var database = firebase.database();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp }