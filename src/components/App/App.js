import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Category from "../../pages/Category";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categoryName" component={Category} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
