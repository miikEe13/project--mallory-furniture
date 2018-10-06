import React, { Component } from "react";

import "./slide.css";
import landing from "../../assets/images/landing-splash-bg.png";
import tables from "../../assets/images/category-tables.png";
import desk from "../../assets/images/category-desks.png";
import miscellaneous from "../../assets/images/category-miscellaneous.png";
import bedroom from "../../assets/images/category-bedroom.png";
import seating from "../../assets/images/category-seating.png";
import storage from "../../assets/images/category-storage.png";

export default class Slide extends Component {
  slide = category => {
    const imageSlide = {
      home: landing,
      seating: seating,
      tables: tables,
      desks: desk,
      storage: storage,
      bedroom: bedroom,
      miscellaneous: miscellaneous
    };
    return imageSlide[category];
  };

  render() {
    return (
      <div className="container-slide">
        <img src={this.slide(this.props.data)} className="landing-splash-bg" />
      </div>
    );
  }
}
