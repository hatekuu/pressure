// src/components/Home.js
import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import EditData from '../[components]/EditData';
import SvgRectangle from '../[components]/SvgRectangle';
const Home = () => {

  const [pressureData, setPressureData] = useState(null);
  const [levelValue, setlevelValue] = useState('');
  const [PcValue, setPcValue] = useState('');
  useEffect(() => {
    fetchData();
  }, ); // Empty dependency array to ensure the effect runs only once on component mount

  const fetchData = async () => {
    try {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
      const functionName = 'getPresure';
      const args = ['65d880bdf332ae485b63b52e'];
      const result = await app.currentUser.callFunction(functionName, ...args);
      setPressureData(result);
      // Set const and P0 values in local state when fetching data
   
      setlevelValue(result.Output.level.toString());
      setPcValue(result.Input.Pc.toString());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Pressure Data</h2>
    <EditData />
    
    {pressureData ? (
      <div className="mt-4">
        <p>
          <strong>Input:</strong> Pc: {PcValue}
        </p>
        <p>
          <strong>Output:</strong> Level: {levelValue} cm
        </p>

        {/* Vertical SVG Rectangle */}
        <SvgRectangle
            width="6%"
            height={levelValue} // Height based on levelValue
            fillColor="blue"
            strokeColor="black"
          />
      </div>
    ) : (
      <p className="mt-4">Loading...</p>
    )}
  </div>
);
};

export default Home;
