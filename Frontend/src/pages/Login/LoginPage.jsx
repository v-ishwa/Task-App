import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userInput, setUserInput] = useState({
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
      <h1 className="auth-heading">Login</h1>
      <form className="auth-form">
        <div className="auth-input-div">
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
      <p>Create an account <span><Link to="/register">Register</Link> </span></p>
    </div>
  );
};

export default LoginPage;
