import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-3 bg-white p-[70px] rounded-2xl">
          <ShieldCheck className="w-20 h-20 animate-bounce text-blue-500" />
          <h1 className="text-3xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-6">
            Welcome to Profile
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-[3px] w-[150px] text-[#222222] bg-transparent font-medium text-sm lg:text-base mt-1 cursor-pointer border-[1px] border-[#222222] hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
