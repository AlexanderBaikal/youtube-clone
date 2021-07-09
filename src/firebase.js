import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0we_kE81YrFBAc7cumPd9rgNDluhkBYk",
  authDomain: "clone-c3282.firebaseapp.com",
  projectId: "clone-c3282",
  storageBucket: "clone-c3282.appspot.com",
  messagingSenderId: "180364641617",
  appId: "1:180364641617:web:38e3aeae6c5923231dbf70",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
