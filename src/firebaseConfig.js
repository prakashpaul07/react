import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADxSt6UDywYxn3Djvl6a1mG_Uu49XcfYc",
    authDomain: "auth-eedf4.firebaseapp.com",
    projectId: "auth-eedf4",
    storageBucket: "auth-eedf4.appspot.com",
    messagingSenderId: "710859170874",
    appId: "1:710859170874:web:b686902907aa0821570103"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase