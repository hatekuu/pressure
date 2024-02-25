import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

  const loginEmailPassword = async () => {
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
     await app.logIn(credentials);



      // Navigate to /home after successful login
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle errors, you might want to display an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={loginEmailPassword}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
