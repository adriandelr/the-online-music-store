// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDjJh5kNPwHGRzRdi_cYnxok7KfTvVfX-g",
  authDomain: "the-online-music-store.firebaseapp.com",
  projectId: "the-online-music-store",
  storageBucket: "the-online-music-store.appspot.com",
  messagingSenderId: "634983174557",
  appId: "1:634983174557:web:7330ac724f145ae35b5f74",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
