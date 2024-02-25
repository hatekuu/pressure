// src/components/RegisterToken.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const RegisterToken = () => {
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const confirmUser = async () => {
      const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const tokenId = params.get('tokenId');

      if (!token || !tokenId || !isButtonPressed) {
        return; // Không chạy nếu không có token hoặc tokenId hoặc nút chưa được nhấn
      }

      try {
        await app.emailPasswordAuth.confirmUser({ token, tokenId });
        console.log('User confirmed successfully!');
        setConfirmationStatus('User confirmed successfully!');
        // Chuyển hướng về trang đăng nhập khi người dùng đã được xác nhận và nút đã được nhấn
        navigate('/login');
      } catch (error) {
        console.error('User confirmation failed:', error);
        setConfirmationStatus('User confirmation failed');
      }
    };

    confirmUser();
  }, [isButtonPressed, navigate]);

  const handleButtonClick = () => {
    // Đặt trạng thái nút thành true khi nút được nhấn
    setButtonPressed(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <p className="mb-4">{confirmationStatus}</p>
        <button
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleButtonClick}
        >
          Confirm User
        </button>
      </div>
    </div>
  );
};

export default RegisterToken;
