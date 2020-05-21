import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyANrD1Q6_AYhRNoV37UWKMSAcWhyuTsSAk",
  authDomain: "c-delivery.firebaseapp.com",
  databaseURL: "https://c-delivery.firebaseio.com",
  projectId: "c-delivery",
  storageBucket: "c-delivery.appspot.com",
  messagingSenderId: "714896208016",
  appId: "1:714896208016:web:847e03c37ea2e45c732815",
  measurementId: "G-DVFHK185EJ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();