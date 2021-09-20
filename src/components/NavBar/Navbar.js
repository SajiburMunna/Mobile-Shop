import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="topnav">
        <Link className="active" to="/">
          HOME
        </Link>
        <Link className="nav" to="/shop">
          SHOP
        </Link>

        <div class="dropdown">
          <button class="dropbtn">
            BRANDS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/samsung">Samsung</Link>
            <Link to="/apple">Apple</Link>
            <Link to="/xiaomi">Xiaomi</Link>
            <Link to="/google">Google</Link>
          </div>
        </div>

        <Link className="nav" to="/signup">
          SIGNUP
        </Link>
        <Link to="/login">SIGNIN</Link>
      </div>
    </>
  );
};
