import React, { useState } from "react";
import * as Realm from "realm-web";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const resetPasswordUser = async () => {
    const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

    if (isLoading) {
      return; // Tránh nhấn nút nhiều lần trong khi đang xử lý
    }

    setIsLoading(true);

    try {
      await app.emailPasswordAuth.sendResetPasswordEmail({ email });
      setRegistrationStatus("Send ResetPassword successful!");
      // window.location.href = "https://mail.google.com/";
    } catch (error) {
      console.error("Send ResetPassword failed:", error);
      setRegistrationStatus("Send ResetPassword failed!");
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

        <button
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={resetPasswordUser}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send ResetPassword request to email"}
        </button>

        {registrationStatus && <p className="mt-4 text-red-500">{registrationStatus}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
