/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { db } from "../../config/Config";
import { productList } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";

export const Product = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state);
  console.log(reduxStore);
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("Products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(), //spread operator
          key: doc.id, // `id` given to us by Firebase
        });
      });

      dispatch(productList(getPostsFromFirebase));
    });
    return () => subscriber();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>New Arival</h1>

      <div className="card-div">
        {reduxStore.List.length > 0 ? (
          reduxStore.List.slice(0, 10).map((post) => (
            <div>
              <div className="card">
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

                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No products Available:(</h1>
        )}
      </div>
    </div>
  );
};
