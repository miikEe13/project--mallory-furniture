import React, { Component } from "react";
import ProductListItem from "../ProductListItem";
export default class CategoryList extends Component {
  state = {
    loading: true,
    error: null,
    products: null
  };
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    const categoryName = this.props.data;
    const API_URL =
      "https://mallory-furniture-admin.now.sh/api/v1/products?category=" +
      categoryName;
    console.log("loading products");
    console.log(API_URL);
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
    /*const categoryList = products.filter(product => {
      if (product) {
        return product;
      }
    });*/
    const list = products.map(product => {
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
