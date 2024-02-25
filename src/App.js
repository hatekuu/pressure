// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/user/login';
import Register from './pages/user/register';
import RegisterToken from './token/registertoken';
import Navbar from './[components]/Navbar';

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          {/* Các Route khác (nếu có) */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registertoken" element={<RegisterToken />} />
          {/* Các Route khác (nếu có) */}
        </Routes>
   
    

  
  
    </Router>
  );
}

export default App;
