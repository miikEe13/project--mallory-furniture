import React, { Component } from "react";

import ImageLogo from "../../assets/images/mf-logo-white.svg";

export default class Logo extends Component {
  render() {
    return <img src={ImageLogo} width="30" height="30" alt="" />;
  }
}
