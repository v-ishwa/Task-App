import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log([name], ":", value);
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(userInput);

    if(result?.success) {
      navigate("/")
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-heading">Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
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
          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "...Loading" : "Login"}
          </button>
        </div>
      </form>
      <p>
        Create an account{" "}
        <span>
          <Link to="/register">Register</Link>{" "}
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
