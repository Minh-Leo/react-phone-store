import React, {Component, Fragment} from "react";
import {Switch, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductList}></Route>
          <Route path='/details' exact component={Details}></Route>
          <Route path='/cart' exact component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
