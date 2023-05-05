// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDN_I1CcNnMoZ5u2heAGcmEYJEV68qyXyA",
    authDomain: "milestone-2-group-5.firebaseapp.com",
    projectId: "milestone-2-group-5",
    storageBucket: "milestone-2-group-5.appspot.com",
    messagingSenderId: "677977804803",
    appId: "1:677977804803:web:a76528f398f694ba51be36",
    measurementId: "G-S6WXZNRBK0"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;