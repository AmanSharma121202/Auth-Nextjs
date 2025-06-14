"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/resetpassword", {
        token,
        newPassword,
      });
      toast.success("Password reset successful!");
      router.push("/login");
    } catch (error: any) {
      console.error("Reset error:", error);
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(newPassword.length < 6);
  }, [newPassword]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          {loading ? "Resetting Password..." : "Reset Password"}
        </h1>

        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700 mb-2 text-left"
        >
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />

        <button
          onClick={handleResetPassword}
          disabled={buttonDisabled}
          className={`w-full py-2 rounded-lg font-medium text-white transition duration-200 ${
            buttonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {buttonDisabled ? "Enter Password" : "Reset Password"}
        </button>
      </div>
    </div>
  );
}
