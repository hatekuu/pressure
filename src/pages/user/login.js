import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
 const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
  
  useEffect(() => {
    fetchData();
  },[]);


const fetchData = async () => {
    try {
      
      if (app.currentUser) {
        navigate('/pressure/home');
      }
    
     
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const loginEmailPassword = async () => {
    if (isLoading) {
      return; // Tránh nhấn nút nhiều lần trong khi đang xử lý
    }
   
  
    setIsLoading(true);
    
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      await app.logIn(credentials);
      navigate('/pressure/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle errors, you might want to display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleAuth = async () => {
   
    try {


      // The redirect URL should be on the same domain as this app and
      // specified in the auth provider configuration.
      const redirectUrl = "http://localhost:3000/pressure/googleauth";
      const credentials = Realm.Credentials.google({ redirectUrl });

      // Calling logIn() opens a Google authentication screen in a new window.
       await app.logIn(credentials);

      // The logIn() promise will not resolve until you call `handleAuthRedirect()`
      // from the new window after the user has successfully authenticated.
      navigate('/pressure/home');
    } catch (error) {
      console.error(error);
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
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={loginEmailPassword}
          disabled={isLoading}
        >
          {isLoading ? 'Logging In...' : 'Login'}
        </button>
        <p className="mt-4">
           Have not an account? <Link to="/pressure/register" className="text-indigo-500">Register</Link>
        </p>
        <p className="mt-4">
           Forgot your password? <Link to="/pressure/rspassword" className="text-indigo-500">Reset Password</Link>
        </p>
      <p className="mt-4 underline mb-4 items-center justify-center">  Or</p>
      <button
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleGoogleAuth}
          disabled={isLoading}
        >    Login with google  </button>
      </div>

      <div>
   
    
    </div>
    </div>
  );
};

export default Login;
