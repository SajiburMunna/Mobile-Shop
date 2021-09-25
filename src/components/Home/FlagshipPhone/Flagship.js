import React from "react";
import "./Flagship.css";
import flagship1 from "../../../Images/flagship1.png";
import flagship2 from "../../../Images/flagship2.png";

const Flagship = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FLAGSHIP</h1>

      <div className="display">
        <div class="container">
          <img src={flagship1} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text1">SHOP</div>
          </div>
        </div>

        <div class="container">
          <img src={flagship2} alt="Avatar" class="image" />
          <div class="overlay">
            <div class="text1">SHOP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flagship;
