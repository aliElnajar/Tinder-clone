import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = process.env.FIREBASE_CONFIG;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
