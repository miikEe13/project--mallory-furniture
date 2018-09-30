import React, { Component } from "react";

import "./Layout.css";
import Header from "../Header";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
