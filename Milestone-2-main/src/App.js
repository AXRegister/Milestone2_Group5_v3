import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Detail from './detail';
import CreateNew from './createNew';
import List from './list'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

export default App;