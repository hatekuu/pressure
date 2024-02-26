import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Realm from "realm-web";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const registerUser = async () => {
    if (isLoading) {
      return; // Tránh nhấn nút nhiều lần trong khi đang xử lý
    }

    setIsLoading(true);

    const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không
    if (password !== confirmPassword) {
      setRegistrationStatus("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      setRegistrationStatus("Registration successful!");
      window.location.href = "https://mail.google.com/";
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationStatus("Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={registerUser}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        {registrationStatus && <p className="mt-4 text-red-500">{registrationStatus}</p>}

        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-indigo-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
