import React from "react";
import "./HeaderBanner.css";
import header from "../../Images/header-banner-back.png";
import leftHeader from "../../Images/back.png";
import { useHistory } from "react-router";

const HeaderBanner = () => {
  const history = useHistory();
  return (
    <div className="div-flex">
      <div>
        <div className="button-div">
          <h1 style={{ color: "white" }}>Mobile Shop</h1>
          <p>
            <span style={{ color: "red", fontSize: "30px" }}>20% off</span> On
            New Products
          </p>
          <button
            className="header-button"
            onClick={() => history.push("/newarival")}
          >
            Shop Now
          </button>
        </div>

        {/* <img src={leftHeader} className="divlft-img" alt="" /> */}
      </div>
      <div className="img-div ">
        <img src={header} alt="" className="div-img" />
      </div>
    </div>
  );
};

export default HeaderBanner;
