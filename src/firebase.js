import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; // auth de autentificacion

const firebaseConfig = {
    apiKey: "AIzaSyAk8auXsremzTwABa2zoAopMSfSCOx7DgU",
    authDomain: "registerproyecto.firebaseapp.com",
    databaseURL: "https://registerproyecto.firebaseio.com",
    projectId: "registerproyecto",
    storageBucket: "registerproyecto.appspot.com",
    messagingSenderId: "644904229638",
    appId: "1:644904229638:web:481c4f7bda292683af9c87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth} // auth de autentificacion