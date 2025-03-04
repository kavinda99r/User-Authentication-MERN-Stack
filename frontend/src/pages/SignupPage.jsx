import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/signup", form);

      toast.success("Account created successfully!", {
        hideProgressBar: true,
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/");
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
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 lg:gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4">
              <div className="flex flex-col gap-2 lg:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
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
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  value={form.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 mx-auto rounded-[3px] w-[300px] bg-blue-500 text-white font-medium text-sm lg:text-base mt-1 cursor-pointer hover:bg-blue-600 transition-all duration-200 ease-in-out"
            >
              Sign Up
            </button>

            <p className="text-center text-[#222222]">
              Already have an account?
              <Link to="/" className="ml-1 text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
