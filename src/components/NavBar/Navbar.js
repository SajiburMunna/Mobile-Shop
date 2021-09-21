import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Navbar = () => {
  const cart = useSelector((state) => state);

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
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>Hello</h1>
    </Box>
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
          <div>
            <React.Fragment key={"right"}>
              <div
                onClick={toggleDrawer("right", true)}
                style={{ marginTop: "6px" }}
              >
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={cart.CartItems.length}
                    color="secondary"
                  >
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
