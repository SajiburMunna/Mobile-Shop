import React, { useLayoutEffect } from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import Addproduct from "./components/Addproduct/Addproduct";
import ProductShow from "./components/Product/ProductShow";
import Shop from "./components/Pages/Shop/Shop.js";
import Samsung from "../src/components/Pages/Brands/Samsung/Samsung";
import Apple from "../src/components/Pages/Brands/Apple/Apple.js";
import Xiaomi from "../src/components/Pages/Brands/Xiaomi/Xiaomi.js";
import Google from "../src/components/Pages/Brands/Google/Google.js";
import Cart from "./components/Pages/Cart/Cart";
import CheckoutForm from "./components/Pages/CheckoutForm/CheckoutForm";
import SearchProduct from "./components/Pages/SearchProduct/SearchProduct";
import SignUpPage from "./components/Login/SignUpPage";
import SignInPage from "./components/Login/SignInPage";
import { Product } from "./components/Product/Product";

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <div style={{ marginBottom: "30px" }}>
            <Navbar></Navbar>
          </div>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route path="/productshow/:key" component={ProductShow}></Route>
            <Route exact path="/addproduct" component={Addproduct}></Route>
            <Route exact path="/productshow" component={ProductShow}></Route>
            <Route exact path="/samsung" component={Samsung}></Route>
            <Route exact path="/apple" component={Apple}></Route>
            <Route exact path="/xiaomi" component={Xiaomi}></Route>
            <Route exact path="/google" component={Google}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/checkout" component={CheckoutForm}></Route>
            <Route
              exact
              path="/searchproduct"
              component={SearchProduct}
            ></Route>
            <Route exact path="/signuppage" component={SignUpPage}></Route>
            <Route exact path="/signinpage" component={SignInPage}></Route>
            <Route exact path="/newarival" component={Product}></Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
