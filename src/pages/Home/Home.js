import React, { Component } from "react";

import Slide from "../../components/Slide";
import FeaturedList from "../../components/FeaturedList";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slide />
        <FeaturedList />
      </React.Fragment>
    );
  }
}
