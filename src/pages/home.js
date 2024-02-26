// src/components/Home.js
import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import EditData from '../[components]/EditData';
import SvgRectangle from '../[components]/SvgRectangle';

const Home = () => {
  const [pressureData, setPressureData] = useState(null);



  useEffect(() => {
    fetchData();
  },);

  const fetchData = async () => {
    try {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
      const functionName = 'getPresure';
      const args = ['65d880bdf332ae485b63b52e'];
      const result = await app.currentUser.callFunction(functionName, ...args);
      setPressureData(result);
     
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
    <h2 className="text-3xl font-semibold mb-4">Pressure Data</h2>

        <EditData />

        {pressureData ? (
         <div className="border p-4 mb-4">
          {pressureData?.public?.output?.jsonSchema?.map((field) => (
        <div key={field.name}>
          <p>
            {field.title}: {pressureData?.public?.output?.jsonData[field.name]}
          </p>
        </div>
      ))}

            {/* Centered SvgRectangle within a parent div */}
        
              <div className="flex mr-24 overflow-visible h-80 mt-0 mb-96">
                <SvgRectangle
                  width="30%"
                  height={pressureData?.public?.output?.jsonData.level*25} // Height based on levelValue
                  fillColor="blue"
                  strokeColor="black"
                  rotate="-180"
                />
              </div>
        
          </div>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
      </div>

 
  );
};

export default Home;
