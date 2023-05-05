import React, {useState, useEffect} from 'react';
import Home from './home';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Detail from './detail';
import CreateNew from './createNew';
import List from './list'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import EditTask from './editTask';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Detail" element={<Detail/>} />
            <Route exact path="/List" element={<List/>} />
            <Route exact path="/CreateNew" element={<CreateNew/>} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/EditTask" element={<EditTask/>} />
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Login" element={<Login/>}/>
          </Routes>
        </Router>
    </div>
  );
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth(app);
export default App;