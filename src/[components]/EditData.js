// src/components/EditData.js
import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';

const EditData = () => {
  const [constValue, setConstValue] = useState('');
  const [P0Value, setP0Value] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [pressureData, setPressureData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
      const functionName = 'getPresure';
      const args = ['65d880bdf332ae485b63b52e'];
      const result = await app.currentUser.callFunction(functionName, ...args);
      setPressureData(result);
      setConstValue(result.Input.const.toString());
      setP0Value(result.Input.P0.toString());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeValue = async () => {
    try {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
      const functionName = 'changeValue';
      const args = [constValue, P0Value];
      await app.currentUser.callFunction(functionName, ...args);
      fetchData();
      setEditMode(false);
    } catch (error) {
      console.error('Error changing values:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-md bg-white shadow-md rounded">
      {isEditMode ? (
        <>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constInput">
              Const:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              type="number"
              id="constInput"
              value={constValue}
              onChange={(e) => setConstValue(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="P0Input">
              P0:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              type="number"
              id="P0Input"
              value={P0Value}
              onChange={(e) => setP0Value(e.target.value)}
            />
          </div>

          <button
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            onClick={changeValue}
          >
            Save Changes
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            <strong>Const:</strong> {pressureData?.Input.const}
          </p>
          <p className="mb-4">
            <strong>P0:</strong> {pressureData?.Input.P0}
          </p>

          <button
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditData;
