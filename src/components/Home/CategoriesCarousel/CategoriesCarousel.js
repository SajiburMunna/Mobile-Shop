import React from "react";
import "./CategoriesCarousel.css";
import samsung from "../../../Images/samsung.png";
import xiaomi from "../../../Images/xiaomi.png";
import iphone from "../../../Images/iphone.png";
import google from "../../../Images/google.png";
import { useHistory } from "react-router-dom";

const CategoriesCarousel = () => {
  const phone = [
    { id: "/samsung", img: samsung },
    { id: "/xiaomi", img: xiaomi },
    { id: "/apple", img: iphone },
    { id: "/google", img: google },
  ];

  let history = useHistory();

  function Click(click) {
    history.push(click);
  }

  return (
    <div>
      <div>
        <h1>
          BRANDS <hr className="h1" />
        </h1>
        <div className="phone">
          {phone.map((p) => (
            <div className="boder">
              <div className="container1">
                <img
                  style={{
                    height: "200px",
                  }}
                  className="image1"
                  src={p.img}
                  alt=""
                />
                <div class="middle1">
                  <div
                    className="text1"
                    onClick={() => {
                      Click(p.id);
                    }}
                  >
                    SHOP
                  </div>
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
