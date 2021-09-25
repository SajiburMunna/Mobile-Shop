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
      <h1>
        BRANDS <hr className="h1" />
      </h1>
      <div class="Row">
        {phone.map((p) => (
          <div class="Column">
            <div
              class="Card"
              onClick={() => {
                Click(p.id);
              }}
            >
              <img
                style={{
                  width: "270px",
                  height: "200px",
                }}
                className="image1"
                src={p.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarousel;
