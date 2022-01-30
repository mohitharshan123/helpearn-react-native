
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBk7u60PtuTAsKm_kWe7fBkp-nVJ-YpXHg",
    authDomain: "helpearn-react-native.firebaseapp.com",
    projectId: "helpearn-react-native",
    storageBucket: "helpearn-react-native.appspot.com",
    messagingSenderId: "938309415395",
    appId: "1:938309415395:web:1ad3a1e61665d84e3170d6",
    measurementId: "G-E2B5HEST0B"
  };

  let Firebase:any;

  if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
  }  

  const auth = Firebase.auth();

  export default Firebase;
  