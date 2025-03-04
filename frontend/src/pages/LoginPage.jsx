import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      toast.success("Logged in successfully! Redirecting...", {
        hideProgressBar: true,
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data.message || "Something went wrong!";
      toast.error(errorMessage, { hideProgressBar: true, autoClose: 3000 });
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col bg-white py-[30px] px-[30px] lg:py-[70px] lg:px-[70px] rounded-[4px] border-[1px] border-gray-300">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-6">
            Login
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 lg:gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
            />
            <button type="submit" className="px-4 py-2 rounded-[3px] bg-blue-500 text-white font-medium text-sm lg:text-base mt-1 cursor-pointer hover:bg-blue-600 transition-all duration-200 ease-in-out">Login</button>

            <p className="text-center text-[#222222]">
              Create an account.
              <Link to="/signup" className="ml-1 text-blue-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
