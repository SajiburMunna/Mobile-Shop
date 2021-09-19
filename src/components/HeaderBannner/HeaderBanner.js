import React from "react";
import "./HeaderBanner.css";
import header from "../../Images/header-banner-back.png";
import leftHeader from "../../Images/back.png";

const HeaderBanner = () => {
  return (
    <div className="div-flex">
      <div>
        <div className="button-div">
          <h1>Mobile Shop</h1>
          <p>20% Off On New Products</p>
          <button>Shop Now</button>
        </div>

        <img src={leftHeader} className="divlft-img" alt="" />
      </div>
      <div className="img-div ">
        <img src={header} alt="" className="div-img" />
      </div>
    </div>
  );
};

export default HeaderBanner;
