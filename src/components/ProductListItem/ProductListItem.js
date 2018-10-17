import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductListItem.css";

export default class ProductListItem extends Component {
  render() {
    const product = this.props.data;
    return (
      <div key={product._id} className="col-md-4 col-sm-12 item">
        <div className="product-item-info card">
          <Link to={`/products/${product._id}`} className="card-body">
            <img className="product-image" src={product.imageLink} />
            <p>{product.item}</p>
            <p>
              ${product.price}
              .00
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
