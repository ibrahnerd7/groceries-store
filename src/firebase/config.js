import firebase from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBg2HiJ0Nhl6iBtfTXAFePGZMn6-55Qbuk",
    authDomain: "beer-74b9d.firebaseapp.com",
    databaseURL: "https://beer-74b9d.firebaseio.com",
    projectId: "beer-74b9d",
    storageBucket: "beer-74b9d.appspot.com",
    messagingSenderId: "539508038107",
    appId: "1:539508038107:web:445ae5ad5e0d33acf3affe",
    measurementId: "G-LLNNEF5CWX"
}

let app = firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth(app);
export const firestore = firebase.firestore(app);
export const storage = firebase.storage(app)