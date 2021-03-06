import React, { Component } from "react";

import ProductListItem from "../../components/ProductListItem";
import Filters from "../../components/Category/Filters";

import "../Category/category.css";

export default class Allproducts extends Component {
  constructor() {
    super();
    console.log("1");
    this.state = {
      loading: true,
      error: null,
      products: null,
      filter: "all"
    };
    console.log(this.state.filter);
  }
  componentDidMount() {
    this.loadProducts();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      this.loadProducts();
    }
  }
  loadProducts = () => {
    const categoryName = this.props.match.params.categoryName;
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
  handleFilter = filter => {
    this.setState({
      filter
    });
  };
  renderList = products => {
    const categoryList = products.filter(product => {
      if (this.state.filter == "all") {
        return product;
      } else if (this.state.filter === "sale") {
        if (product.onSale) {
          return product;
        }
      }
    });
    console.log(categoryList);
    const list = categoryList.map(product => {
      return <ProductListItem key={product._id} data={product} />;
    });
    return list;
  };

  render() {
    const { loading, products, error } = this.state;
    const categoryName = this.props.match.params.categoryName;
    return (
      <React.Fragment>
        {<Filters onFilter={this.handleFilter} />}
        <section className="container">
          <div className="row">
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
      </React.Fragment>
    );
  }
}
