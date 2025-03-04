import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>Welcome to Dashboard!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default ProfilePage;
