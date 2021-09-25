/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import { removeToCart, searchProduct } from "../../redux/action.js";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Navbar = () => {
  const [searchData, setSearchData] = useState();
  const history = useHistory();
  const goTo = (goto) => {
    history.push(goto);
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartItems);

  console.log(cart);

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
  }, [cart, totalPrice]);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        style={{ margin: "5px" }}
      >
        <p style={{ textAlign: "center" }}>Add Cart</p>

        <List>
          {cart.map((pd, index) => (
            <div className="add-cart-div">
              <button
                onClick={() => dispatch(removeToCart(pd.key))}
                className="add-cart-remove-button"
              >
                ❌
              </button>
              <img className="add-cart-image" src={pd.ProductImg} alt="" />

              <div style={{ textAlign: "left" }}>
                <div>
                  <small style={{ marginLeft: "30px" }}>{pd.ProductName}</small>
                  <br />
                  <small style={{ marginLeft: "30px" }}>
                    {pd.qty}×{pd.ProductPrice}TK
                  </small>
                </div>
              </div>
            </div>
          ))}
        </List>
        <p>Total Price :{totalPrice}TK</p>
        <div></div>

        <p
          style={{
            border: "1px solid black",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => goTo("/cart")}
        >
          View Cart
        </p>
      </Box>
    </>
  );

  return (
    <>
      <div className="topnav">
        <Link className="active" to="/">
          HOME
        </Link>
        <Link className="nav" to="/shop">
          SHOP
        </Link>

        <div class="dropdown">
          <button class="dropbtn">
            BRANDS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/samsung">Samsung</Link>
            <Link to="/apple">Apple</Link>
            <Link to="/xiaomi">Xiaomi</Link>
            <Link to="/google">Google</Link>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <input
            style={{ height: "30px", marginTop: "10px", border: "none" }}
            type="text"
            value={searchData}
            onChange={(evant) => setSearchData(evant.target.value)}
            placeholder="seaching"
          />
          <button
            onClick={() =>
              dispatch(searchProduct(searchData), goTo("/searchproduct"))
            }
            style={{
              height: "30px",
              marginTop: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Search
          </button>
          <div>
            <React.Fragment key={"right"}>
              <div
                onClick={toggleDrawer("right", true)}
                style={{ marginTop: "6px" }}
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={totalQty} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </div>

              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </React.Fragment>
          </div>

          <Link style={{ background: "none" }} to="/login">
            <LoginIcon style={{ color: "black" }}> </LoginIcon>
          </Link>
        </div>
      </div>
    </>
  );
};
