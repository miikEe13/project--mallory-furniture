import React, { Component } from "react";
import "./product.css";
import AddToCart from "../../components/AddToCart";
export default class ProductView extends Component {
  state = {
    loading: true,
    error: null,
    product: null
  };

  componentDidMount() {
    this.loadProduct();
  }
  loadProduct = () => {
    const productId = this.props.match.params.productId;
    const API_URL =
      "https://mallory-furniture-admin.now.sh/api/v1/products/" + productId;
    console.log("loading product");
    this.setState({
      loading: true,
      error: null
    });

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          product: data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  render() {
    const { loading, product, error } = this.state;
    return (
      <div className="container container-product">
        {!loading &&
          product && (
            <div className="row">
              <div className="col-sm-12 col-md-6 product-info-media">
                <img src={product.imageLink} className="product-photo" />
              </div>
              <div className="col-sm-12 col-md-6 product-info-main">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">{product.item}</h1>
                    <h5 className="product-price">
                      $ {product.price}
                      .00
                    </h5>
                    <div className="row">
                      <div className="col-sm-4 col-md-4">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Condition
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {product.condition}
                        </h6>
                      </div>
                      <div className="col-sm-4 col-md-4">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Measurements
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                          W {product.width} L {product.length} H{" "}
                          {product.height}
                        </h6>
                      </div>
                      <div className="col-sm-4 col-md-4">
                        <AddToCart
                          addToCart={this.props.addToCart}
                          product={product}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}
