import firebase from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA8lmp2LHz0cqM7D91fbpjmrUUbuLQT8t8",
    authDomain: "grocery-store-a808f.firebaseapp.com",
    databaseURL: "https://grocery-store-a808f.firebaseio.com",
    projectId: "grocery-store-a808f",
    storageBucket: "grocery-store-a808f.appspot.com",
    messagingSenderId: "387582739303",
    appId: "1:387582739303:web:52af4ad2c19c8f6adfa5c2",
    measurementId: "G-4KLB3C4WFS"
  };
  
let app = firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth(app);
export const firestore = firebase.firestore(app);
export const storage = firebase.storage(app)