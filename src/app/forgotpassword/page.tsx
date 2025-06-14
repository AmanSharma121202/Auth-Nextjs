"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", { email });
      toast.success("Reset email sent!");
      console.log("Email response:", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("Forgot password error:", error.response?.data || error.message);
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(email.trim().length === 0);
  }, [email]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          {loading ? "Sending Email..." : "Forgot Password"}
        </h1>

        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />

        <button
          onClick={handleForgotPassword}
          disabled={buttonDisabled}
          className={`w-full py-2 rounded-lg text-white font-medium transition duration-200 ${
            buttonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {buttonDisabled ? "Enter Email" : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
}
