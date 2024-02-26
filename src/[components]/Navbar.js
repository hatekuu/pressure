// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TDTU from "./assets/TDTU.png"
import * as Realm from 'realm-web';

const Navbar = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
  const userId = app.currentUser?.id;
  const navigate = useNavigate();
 
  
  
  const handleButtonClick = async () => {
    if (userId) {
      try {
        await app.allUsers[userId].logOut();
        console.log("Logout successful")
        navigate('/login');
      } catch (error) {
        console.log(error.error)
      }
    }
  };

  return (
    <nav className="bg-indigo-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="text-white font-bold text-xl flex items-center">
          <img src={TDTU} alt="Logo" className="mr-2" width="70" height="70" />
          Home
        </Link>
        <div className="float-right">
          {!userId ? (
            // Render Login and Register if userId is null
            <>
            
              <Link to="/login" className="text-white mr-4">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          ) : (
            // Render LogOut if userId is not null
            <div>
            
            <button onClick={handleButtonClick} className="text-white">
              LogOut
            </button></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
