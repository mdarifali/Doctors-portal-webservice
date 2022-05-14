// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyATlq43jhwhhRHFS5wUMhyRdZot_AZXeXc",
    authDomain: "doctors-portal-webservice.firebaseapp.com",
    projectId: "doctors-portal-webservice",
    storageBucket: "doctors-portal-webservice.appspot.com",
    messagingSenderId: "743520184168",
    appId: "1:743520184168:web:7d3b5f8983690aa424d8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;