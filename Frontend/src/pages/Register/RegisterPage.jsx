import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log([name], ":", value);
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="auth-container">
      <h1 className="auth-heading">Register</h1>
      <form className="auth-form">
        <div className="auth-input-div">
          <input
            className="auth-input"
            type="text"
            placeholder="Name"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
          <input
            className="auth-input"
            type="text"
            placeholder="Email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
          <input
            className="auth-input"
            type="text"
            placeholder="Password"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        <button className="auth-button">Login</button>
        </div>
      </form>
      <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
    </div>
  );
};

export default RegisterPage;
