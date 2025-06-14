"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Verify Email</h1>

        {verified && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              ✅ Email Verified
            </h2>
            <Link
              href="/login"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Go to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-red-600">
              ❌ Verification Failed
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Invalid or expired token. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
