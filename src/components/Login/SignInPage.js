import React, { useState } from "react";
import { auth } from "../../config/Config";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./SignInPage.css";

const SignInPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        props.history.push("/checkout");
      })
      .catch((err) => setError("Please Create account"));
  };
  return (
    <div>
      <br />
      <fieldset className="login-form">
        <br />
        <legend>LOGIN</legend>
        <br />
        <form autoComplete="off" className="form-group" onSubmit={login}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="login-input"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="login-input"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        {error && <span className="error-msg">{error}</span>}
        <br />
        <span>
          Don't have an account? Register
          <Link to="/signuppage"> SignUp</Link>
        </span>
      </fieldset>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default SignInPage;
