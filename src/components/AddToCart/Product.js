import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div class="container cart">
        <div className="row">
          <div className="col-sm-12 remove-item">
            <i class="material-icons">highlight_off</i>
          </div>
          <div className="col-sm-12 cart-image">
            <img className="cart-product-image" src={product.imageLink} />
          </div>
          <div className="col-sm-12 cart-name">
            <span className="cart-product-name">{product.item}</span>
          </div>
          <div className="col-sm-12 cart-price">
            <span className="cart-product-price">
              ${product.price}
              .00
            </span>
          </div>
        </div>
      </div>
    );
  }
}
