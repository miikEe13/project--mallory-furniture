import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductList.css";

export default class ProductList extends Component {
  render() {
    const product = this.props.data;
    return (
      <div key={product._id} className="col-md-4 col-sm-12">
        <Link to={`/products/${product._id}`}>
          <img className="product-image" src={product.imageLink} />
          <p>{product.item}</p>
          <p>{product.price}</p>
        </Link>
      </div>
    );
  }
}
