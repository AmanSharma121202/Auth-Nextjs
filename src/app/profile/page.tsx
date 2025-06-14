"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Profile</h1>
        <p className="text-gray-600 mb-4">Welcome to your profile page</p>

        <h2 className="py-2 px-4 rounded bg-green-100 text-green-800 font-medium mb-6 break-words">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link
              href={`/profile/${data}`}
              className="text-blue-600 hover:underline break-words"
            >
              {data}
            </Link>
          )}
        </h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={logout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>

          <button
            onClick={getUserDetails}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Get User Details
          </button>
        </div>
      </div>
    </div>
  );
}
