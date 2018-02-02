import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCN-XNbjElV9y9vFvaWsxcvDbCedb6lQHU",
    authDomain: "fb-counter-d28f1.firebaseapp.com",
    databaseURL: "https://fb-counter-d28f1.firebaseio.com",
    projectId: "fb-counter-d28f1",
    storageBucket: "fb-counter-d28f1.appspot.com",
    messagingSenderId: "32089563054"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;