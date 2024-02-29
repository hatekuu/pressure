// src/components/CallFuntion.js
import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';

const CallFuntion = () => {
  const [pressureData, setPressureData] = useState(null);



  useEffect(() => {
    fetchData();
  },);

  const fetchData = async () => {
    try {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
    
      const functionName = 'test';
    
      const result = await app.callFunction(functionName);
      
      setPressureData(result);
     
     console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
    <h2 className="text-3xl font-semibold mb-4">Pressure Data</h2>

<div></div>
            {/* Centered SvgRectangle within a parent div */}
        
            
      </div>

 
  );
};

export default CallFuntion;
