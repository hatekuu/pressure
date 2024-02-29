import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const GoogleAuth = () => {

  const navigate = useNavigate();
  useEffect(() => {
    try {
      Realm.handleAuthRedirect();
    } catch (error) {
      
    }
  
    navigate('/pressure/home');
  });
  return (
   <div>

   </div>
  );
};

export default GoogleAuth;
