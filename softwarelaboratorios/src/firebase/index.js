import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA6pDbcgiiAv6NibCTyrcpZ8Rp9Q0qMf6k",
  authDomain: "gestion-de-laboratorios.firebaseapp.com",
  projectId: "gestion-de-laboratorios",
  storageBucket: "gestion-de-laboratorios.appspot.com",
  messagingSenderId: "24183047099",
  appId: "1:24183047099:web:8e84a66a6e59fd9daaba9e",
  measurementId: "G-MPFK1BTFVC"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth};
