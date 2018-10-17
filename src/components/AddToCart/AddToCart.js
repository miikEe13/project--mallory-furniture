import React, { Component } from "react";

export default class AddToCart extends Component {
  handleClickCart = () => {
    const { addToCart, product } = this.props;
    addToCart(product);
  };
  render() {
    return (
      <div className="container-cart">
        <button
          type="button"
          onClick={this.handleClickCart}
          className="btn btn-danger btn-md addtocart-button"
        >
          Add to cart
        </button>
      </div>
    );
  }
}
