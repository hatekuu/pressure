// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/user/login';
import Register from './pages/user/register';
import RegisterToken from './token/registertoken';
import Navbar from './[components]/Navbar';
import ResetPassword from './pages/user/rspassword';
import ResetPasswordToken from './token/rstoken';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';
function App() {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
  const navigate = useNavigate();
  if (app.currentUser) {
    navigate('/home');
  }
  else{
    navigate('/login');
  }

  return (
    <Router>
      
      <Navbar />
      
        <Routes>
      
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registertoken" element={<RegisterToken />} />
          <Route path="/rspassword" element={<ResetPassword />} />
          <Route path="/rspasswordtoken" element={<ResetPasswordToken />} />
        </Routes>
  
   
  </Router>
);
}

export default App;
