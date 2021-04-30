import firebase from 'firebase';

// API deprecated, just example, should be a environment variable
const firebaseConfig = {
    apiKey: "AIzaSyBehBTuN7Lqo6BboyTAXeNy1U4UaIXDIME",
    authDomain: "whatsapp-clone-7d10d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-7d10d.firebaseio.com",
    projectId: "whatsapp-clone-7d10d",
    storageBucket: "whatsapp-clone-7d10d.appspot.com",
    messagingSenderId: "385751063998",
    appId: "1:385751063998:web:f09b7485cf4af2dacf6def",
    measurementId: "G-QD3FGEQM4Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;