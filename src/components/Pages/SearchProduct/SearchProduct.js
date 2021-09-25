import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../../redux/action";

const SearchProduct = () => {
  const history = useHistory();
  const Product = useSelector((state) => state.List);
  const SearchData = useSelector((state) => state.SearchData);
  const dispatch = useDispatch();
  console.log(Product);
  function handleClick(key) {
    history.push(`/productshow/${key}`);
  }

  return (
    <>
      <h1>Your Search Products "{SearchData}"</h1>
      <div class="row">
        {Product.length > 0 ? (
          // eslint-disable-next-line array-callback-return
          Product.filter((pd) => {
            if (SearchData === "") {
              return pd;
            } else if (
              pd.ProductName.toLowerCase().includes(SearchData.toLowerCase())
            ) {
              return pd;
            }
          }).map((post) => (
            <div class="column">
              <div className="card">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(post.key)}
                >
                  <div>
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

export default SearchProduct;
