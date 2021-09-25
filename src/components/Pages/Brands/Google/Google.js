import React, { useEffect } from "react";
import { db } from "../../../../config/Config";
import { productList, addToCart } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Footer/Footer";
import { useHistory } from "react-router";
import "../Google/Google.css";

const Google = () => {
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
          key: doc.id, // `id` given to us by Firebase
        });
      });

      dispatch(productList(getPostsFromFirebase));
    });
    return () => subscriber();
  }, []);
  const pd = reduxStore.List.filter((p) => p.ProductName === "Google");
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>GOOGLE PHONES</h1>

        <div className="Google-row">
          {pd.length > 0 ? (
            pd.map((post) => (
              <div key={post.key} className="Google-column">
                <div className="Google-card">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(post.key)}
                  >
                    <div>
                      <img
                        className="Google-img"
                        src={post.ProductImg}
                        alt="Denim Jeans"
                      />
                    </div>

                    <h4 style={{ marginTop: "5px" }}>{post.ProductName}</h4>
                    <p>Model-{post.ProductModel}</p>
                    <p className="price">{post.ProductPrice} TK</p>
                  </div>
                  <p>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(addToCart({ ...post, qty: 1 }))}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>No products Available:(</h1>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Google;
