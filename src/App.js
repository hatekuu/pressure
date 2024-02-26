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

function App() {


  return (
    <Router>
      
      <Navbar />
      
        <Routes>
      
          <Route path="/pressure/home" element={<Home />} />
          <Route path="/pressure/login" element={<Login />} />
          <Route path="/pressure/register" element={<Register />} />
          <Route path="/pressure/registertoken" element={<RegisterToken />} />
          <Route path="/pressure/rspassword" element={<ResetPassword />} />
          <Route path="/pressure/rspasswordtoken" element={<ResetPasswordToken />} />
        </Routes>
  
   
  </Router>
);
}

export default App;
