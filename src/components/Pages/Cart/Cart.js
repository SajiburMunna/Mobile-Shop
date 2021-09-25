import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer/Footer";
import {
  addQuantity,
  subQuantity,
  removeToCart,
  clearCart,
} from "../../../redux/action";
import "../Cart/Cart.css";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.CartItems);
  const dispatch = useDispatch();
  console.log(cart);
  const history = useHistory();
  const goCheckOut = () => {
    history.push("/checkout");
  };

  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let item = 0;
    let price = 0;

    cart.forEach((items) => {
      item += items.qty;
      price += items.qty * items.ProductPrice;
    });
    setTotalQty(item);
    setTotalPrice(price);
  }, [cart, totalPrice, totalQty]);
  return (
    <>
      <div className="full-cart-div">
        <div className="cart-div">
          {cart.length > 0 ? (
            cart.map((pd) => (
              <div key={pd.key} className="border-div">
                <div className="product-div-img">
                  <div>
                    <img className="img" src={pd.ProductImg} alt="" />
                  </div>
                  <div className="product-info-div">
                    <small>ProductName - {pd.ProductName}</small>
                    <br />
                    <small>Model - {pd.ProductModel}</small>
                    <br />
                    <small>Price :{pd.ProductPrice}/unit</small>
                    <div className="quantity-button">
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(addQuantity(pd.key))}
                      >
                        +
                      </button>
                      <small>
                        {" "}
                        <span style={{ margin: "5px" }}>{pd.qty}</span>
                      </small>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(subQuantity(pd.key))}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div
                    style={{ cursor: "pointer", marginLeft: "15px" }}
                    onClick={() => dispatch(removeToCart(pd.key))}
                  >
                    ⛔
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p> Your Cart Is Empty</p>
          )}
        </div>

        <div className="proceed">
          <form action="">
            <fieldset>
              <legend>ORDER SUMMARY</legend>
              <small>Total Qunatity : {totalQty}</small>
              <br />
              <small>Total Price :{totalPrice}TK</small>
              <br />
              <button onClick={() => goCheckOut()}>Proceed Oder</button>
              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Cart;
