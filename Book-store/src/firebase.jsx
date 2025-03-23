import {initializeApp} from"firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyBl542Re3SYenGicDVHZJrm0fumwdFlk-s",
    authDomain: "book-store-4712e.firebaseapp.com",
    projectId: "book-store-4712e",
    storageBucket: "book-store-4712e.firebasestorage.app",
    messagingSenderId: "102037750642",
    appId: "1:102037750642:web:3e956675fea53f8ecc93eb",
    databaseURL: "https://book-store-4712e-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);