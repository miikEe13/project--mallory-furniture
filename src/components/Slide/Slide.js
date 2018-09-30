import React, { Component } from "react";

import "./slide.css";
import landing from "../../assets/images/landing-splash-bg.png";

export default class Slide extends Component {
  render() {
    return (
      <div className="container-slide">
        <img src={landing} className="landing-splash-bg" />;
      </div>
    );
  }
}
