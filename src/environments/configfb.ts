import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyBTpHIok-xUaYqoaGhHgKWUosIwQ0-qOFg",
  authDomain: "automation-water-system.firebaseapp.com",
  databaseURL: "https://automation-water-system-default-rtdb.firebaseio.com",
  projectId: "automation-water-system",
  storageBucket: "automation-water-system.appspot.com",
  messagingSenderId: "678051392923",
  appId: "1:678051392923:web:30b0968c02e506886d453e"
  };

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth
