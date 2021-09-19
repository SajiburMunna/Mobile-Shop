import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div class="topnav">
        <Link class="active" to="/">
          Home
        </Link>
        <Link className="nav" to="/signup">
          Signup
        </Link>
        <Link to="/login">Signin</Link>
      </div>
    </>
  );
};
