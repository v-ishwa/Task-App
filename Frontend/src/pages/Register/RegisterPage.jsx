import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { register, loading } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userInput);
  }

  return (
    <div className="auth-container">
      <h1 className="auth-heading">Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
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
          <button className="auth-button" type="submit" disabled={loading}>{loading ? "...Loading" : "Register"}</button>
        </div>
      </form>
      <p>
        Already have an account?{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
