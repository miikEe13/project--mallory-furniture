import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    const { width, height, src } = this.props;
    return <img src={src} width={width} height={height} alt="" />;
  }
}
