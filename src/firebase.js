import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANndiKnTDyvU_xbd0AHeCCbLBcELO9Sf4",
    authDomain: "clone-bbde3.firebaseapp.com",
    projectId: "clone-bbde3",
    storageBucket: "clone-bbde3.appspot.com",
    messagingSenderId: "655112739359",
    appId: "1:655112739359:web:4fa312b8ac6dc04ae5532a",
    measurementId: "G-FR78655SM6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };