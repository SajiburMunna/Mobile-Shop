import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useParams } from "react-router";
import { db } from "../../config/Config";
import { detailsList, addToCart } from "../../redux/action";
import "./ProductShow.css";
import Footer from "../Footer/Footer.js";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductShow = () => {
  const { key } = useParams();

  const dispatch = useDispatch();
  const Store = useSelector((state) => state.DetailsList);

  console.log(Store);

  useEffect(() => {
    db.collection("Products")
      .doc(key)
      .get()
      .then((sanapshot) => {
        if (sanapshot) {
          // ge.push({ ...sanapshot.data(), qty: 1 });

          dispatch(detailsList({ ...sanapshot.data(), key: key }));
        }
      });
  }, []);

  return (
    <>
      <div id="container">
        <div class="product-details">
          <h1>{Store.ProductName} </h1>

          <p class="information">
            “Mobile phones ... they're not for communicating, they're for
            broadcasting. Broadcasting The Show Of Me.”
          </p>

          <div class="control">
            <button class="btn">
              <span class="price">{Store.ProductPrice} TK </span>

              <span class="shopping-cart">
                <AddShoppingCartIcon></AddShoppingCartIcon>
              </span>

              <span
                class="buy"
                onClick={() => dispatch(addToCart({ ...Store, qty: 1 }))}
              >
                ADD CART
              </span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img src={Store.ProductImg} alt="Omar Dsoky" />

          <div class="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>MODEL:{Store.ProductModel} </strong>
              </li>
              <li>
                <strong>RAM: </strong>6GB
              </li>
              <li>
                <strong>:ROM: </strong>120GB
              </li>
              <li>
                <strong>DISPLAY: </strong>6INC
              </li>
              <li>
                <strong>CAMERA: </strong>48MP
              </li>
              <li>
                <strong>BATTERY: </strong>5000mAh
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductShow;
