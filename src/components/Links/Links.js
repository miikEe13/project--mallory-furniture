import React, { Component } from "react";
import { Link } from "react-router-dom";

import { categories } from "../../resource/categories.js";

export default class Links extends Component {
  renderList = categories => {
    const list = categories.map(category => {
      return (
        <div className="container-link col-sm-3">
          <button type="button" className="btn btn-lg btn-primary">
            <Link className="link-category" to={category.link}>
              {category.name}
            </Link>
          </button>
        </div>
      );
    });
    return list;
  };
  render() {
    console.log(categories);
    return (
      <div className="container">
        <div className="row">
          <div className="container-all">
            <button type="button" className="btn btn-danger btn-lg">
              <Link className="link-all" to="/all">
                All products
              </Link>
            </button>
          </div>
        </div>
        <div className="row container-links-categories">
          {this.renderList(categories)}
        </div>
      </div>
    );
  }
}
