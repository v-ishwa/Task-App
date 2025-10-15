import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.auth);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   dispatch(loginUser({ email, password }));
  // };

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
      <p>Create an account <span><Link to="/register">Register</Link></span></p>
    </div>
  );
};

export default LoginPage;
