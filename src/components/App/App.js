import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import ProductView from "../../pages/ProductView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categoryName" component={Category} />
            <Route exact path="/products/:productId" component={ProductView} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
