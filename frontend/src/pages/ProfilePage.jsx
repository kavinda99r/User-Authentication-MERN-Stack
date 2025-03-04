import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, CircleUserRound } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await fetch("http://localhost:5000/api/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex flex-col items-center gap-3  p-[70px] rounded-2xl">
        <ShieldCheck className="w-20 h-20 animate-bounce text-[#0078D4]" />
        <h1 className="text-3xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-5">
          Welcome {userData?.name} !
        </h1>

        {loading ? (
          <p>Loading user data...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-xl font-semibold text-[#222222] flex items-center gap-1 mb-2">
              <CircleUserRound />
              User Information
            </h2>
            <div className="flex gap-[50px]">
              <div className="flex flex-col gap-3">
                <p className="text-gray-700"><b>Name</b><br/>{userData?.name}</p>
                <p className="text-gray-700"><b>Email Address</b><br/>{userData?.email}</p>
                <p className="text-gray-700"><b>Phone Number</b><br/>{userData?.phone}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-700"><b>Address</b><br/>{userData?.address}</p>
                <p className="text-gray-700"><b>City</b><br/>{userData?.city}</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-[3px] w-[150px] text-[#222222] bg-transparent font-medium text-sm lg:text-base mt-6 cursor-pointer border-[1px] border-[#222222] hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
