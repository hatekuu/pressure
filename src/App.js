// src/App.js
import React,{lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const CallFuntion  =lazy(()=> import ('./pages/test/callfuntion'))
const Home =lazy(()=> import ('./pages/home'))
const Login =lazy(()=> import ('./pages/user/login'))
const Register =lazy(()=> import ( './pages/user/register'))
const RegisterToken =lazy(()=> import ('./token/registertoken'))
const  Navbar =lazy(()=> import ('./[components]/Navbar'))
const ResetPassword =lazy(()=> import ('./pages/user/rspassword'))
const ResetPasswordToken =lazy(()=> import ('./token/rstoken'))
const  Form =lazy(()=> import ('./pages/test/form'))
const GoogleAuth =lazy(()=> import ( './token/googletoken'))
function App() {


  return (
  
      
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
  
      <Route path="/view/cpkd/page?authuser=1" element={<GoogleAuth />} />
      <Route path="/pressure/callfuntion" element={<CallFuntion />} />
      <Route path="/dong/form" element={<Form />} />
        <Route path="/pressure/home" element={<Home />} />
        <Route path="/pressure" element={<Login />} />
        <Route path="/pressure/register" element={<Register />} />
        <Route path="/pressure/registertoken" element={<RegisterToken />} />
        <Route path="/pressure/rspassword" element={<ResetPassword />} />
        <Route path="/pressure/rspasswordtoken" element={<ResetPasswordToken />} />
      </Routes>
    </Suspense>
  </Router>
);
}

export default App;
