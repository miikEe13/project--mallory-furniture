import React, { Component } from "react";

import ProductListItem from "../ProductListItem";

export default class Slide extends Component {
  state = {
    loading: true,
    error: null,
    products: null
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    const API_URL = "https://mallory-furniture-admin.now.sh/api/v1/products";
    console.log("loading products");
    this.setState({
      loading: true,
      error: null
    });

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          products: data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  renderList = products => {
    const featuredProducts = products.filter(product => {
      if (product.featured === true) {
        return product;
      }
    });
    const list = featuredProducts.map(product => {
      return <ProductListItem key={product._id} data={product} />;
    });
    return list;
  };
  render() {
    const { loading, products, error } = this.state;
    console.log(products);
    return (
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Featured Products</h1>
            <h3>Check out someof our favorite listings</h3>
          </div>
          <div>
            {!loading &&
              products && (
                <div className="col-sm-12">
                  <div className="row">{this.renderList(products)}</div>
                </div>
              )}
          </div>
        </div>
      </section>
    );
  }
}
