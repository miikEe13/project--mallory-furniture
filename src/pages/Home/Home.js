import React, { Component } from "react";

import Slide from "../../components/Slide";
import FeaturedList from "../../components/FeaturedList";
import Links from "../../components/Links";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slide data="home" />
        <FeaturedList />
        <Links />
      </React.Fragment>
    );
  }
}
