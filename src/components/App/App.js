import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import ProductView from "../../pages/ProductView";
import Allproducts from "../../pages/AllProducts";
import Terms from "../../pages/Terms";
import About from "../../pages/About";

class App extends Component {
  state = {
    products: [],
    filled: false,
    test: false
  };

  handleAddToCart = product => {
    console.log(product);

    this.setState({
      products: [...this.state.products, product]
    });
  };

  render() {
    return (
      <div className="App">
        <Layout cart={this.state.products} filled={this.state.filled}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categoryName" component={Category} />
            <Route exact path="/all" component={Allproducts} />
            <Route
              exact
              path="/products/:productId"
              component={props => {
                return (
                  <ProductView {...props} addToCart={this.handleAddToCart} />
                );
              }}
            />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
