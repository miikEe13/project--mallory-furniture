import React, { Component } from "react";

import "./Layout.css";
import Header from "../Header";
import Footer from "../Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header cart={this.props.cart} />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
