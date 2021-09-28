import React, { useState } from "react";
import { auth, db } from "../../config/Config";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./SignUpPage.css";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // signup
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/signinpage");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <br />
      <br />
      <fieldset className="signup-form">
        <br />
        <legend>Sign up</legend>
        <br />
        <form autoComplete="off" className="form-group" onSubmit={signup}>
          <label htmlFor="name">UserName</label>
          <br />
          <input
            type="text"
            className="signup-input"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            className="signup-input"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="passowrd">Password</label>
          <br />
          <input
            type="password"
            className="signup-input"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button type="submit" className="signup-button">
            SUBMIT
          </button>
        </form>
        {error && <span className="error-msg">{error}</span>}
        <br />
        <span>
          Already have an account? Login
          <Link to="/signinpage"> Here</Link>
        </span>
      </fieldset>
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default SignUpPage;
