import React, { useState } from "react";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
