/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { db } from "../../config/Config";
import { productList, addToCart } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { useHistory } from "react-router";

export const Product = () => {
  let history = useHistory();

  function handleClick(key) {
    history.push(`/productshow/${key}`);
  }

  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);

  console.log(reduxStore);
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("Products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id,

          // `id` given to us by Firebase
        });
      });

      dispatch(productList(getPostsFromFirebase));
    });
    return () => subscriber();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>New Arival</h1>

      <div class="row">
        {reduxStore.List.length > 0 ? (
          reduxStore.List.slice(0, 12).map((post) => (
            <div class="column">
              <div className="card">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(post.key)}
                >
                  <div>
                    <span
                      style={{
                        zIndex: 1,
                        backgroundColor: "#000000",
                        color: "red",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      20%
                    </span>

                    <img
                      className="img"
                      src={post.ProductImg}
                      alt="Denim Jeans"
                    />
                  </div>

                  <h4 style={{ marginTop: "5px" }}>{post.ProductName}</h4>
                  <p>Model-{post.ProductModel}</p>
                  <p className="price">{post.ProductPrice} TK</p>
                </div>
                <div>
                  <p>
                    <button
                      onClick={() => dispatch(addToCart({ ...post, qty: 1 }))}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No products Available:(</h1>
        )}
      </div>
    </>
  );
};
