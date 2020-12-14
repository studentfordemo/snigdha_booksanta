import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB-5enU8jzvQP8wWMiOgsosvUrU-By6XkM",
    authDomain: "check-64767.firebaseapp.com",
    databaseURL: "https://check-64767.firebaseio.com",
    projectId: "check-64767",
    storageBucket: "check-64767.appspot.com",
    messagingSenderId: "93906471895",
    appId: "1:93906471895:web:e7cb88b59c8b8c0db2d992",
    measurementId: "G-0SHXN7MWGF"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();