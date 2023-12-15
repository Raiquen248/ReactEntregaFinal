import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRPbu57AaVI-51NVP8Ohywhoc4nkq-3L4",
  authDomain: "coder-ecommerce-react-5c442.firebaseapp.com",
  projectId: "coder-ecommerce-react-5c442",
  storageBucket: "coder-ecommerce-react-5c442.appspot.com",
  messagingSenderId: "106964902559",
  appId: "1:106964902559:web:d0ce5b45b6626e4972f8aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)