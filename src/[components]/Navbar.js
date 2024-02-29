// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        navigate('/pressure');
      } catch (error) {
        console.log(error.error)
      }
    }
  };

  return (
    <nav className="bg-indigo-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/pressure/home" className="text-white font-bold text-xl flex items-center">
         
          Home
        </Link>
        <div className="float-right">
          {!userId ? (
            // Render Login and Register if userId is null
            <>
            
              <Link to="/pressure" className="text-white mr-4">
                Login
              </Link>
              <Link to="/pressure/register" className="text-white">
                Register
              </Link>
              <Link to="/pressure/google" className="text-white mr-5">
                  google
              </Link>
            </>
          ) : (
            // Render LogOut if userId is not null
            <div >
             <Link to="/pressure/form" className="text-white mr-5">
                Form
              </Link>
              <Link to="/pressure/callfuntion" className="text-white mr-5">
                function
              </Link>
             
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
