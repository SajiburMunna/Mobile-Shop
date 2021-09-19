import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import Addproduct from "./components/Addproduct/Addproduct";
import ProductShow from "./components/Product/ProductShow";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/addproduct" component={Addproduct}></Route>
          <Route exact path="/productshow" component={ProductShow}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
