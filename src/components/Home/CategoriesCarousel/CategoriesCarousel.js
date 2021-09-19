import React from "react";
import "./CategoriesCarousel.css";
import samsung from "../../../Images/samsung.png";
import xiaomi from "../../../Images/xiaomi.png";
import iphone from "../../../Images/iphone.png";
import google from "../../../Images/google.png";

const CategoriesCarousel = () => {
  const phone = [
    {
      img: samsung,
    },
    {
      img: xiaomi,
    },
    {
      img: iphone,
    },
    {
      img: google,
    },
  ];
  return (
    <div>
      <div>
        <h1>
          Categories <hr />
        </h1>
        <div className="phone">
          {phone.map((p) => (
            <div className="boder">
              <div className="container1">
                <img
                  style={{
                    borderRadius: "20px",
                    height: "200px",
                  }}
                  className="image1"
                  src={p.img}
                  alt=""
                />
                <div class="middle1">
                  <div className="text1">John Doe</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CategoriesCarousel;
