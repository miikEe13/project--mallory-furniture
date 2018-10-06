import React, { Component } from "react";

//import CategoryList from "../../components/Category/CategoryList";
import ProductListItem from "../../components/ProductListItem";
import Slide from "../../components/Slide";

export default class Category extends Component {
  state = {
    loading: true,
    error: null,
    products: null
  };
  componentDidMount() {
    this.loadProducts();
  }
  componentDidUpdate(prevProps) {
    console.log("4 StarWarsPlanet did update");
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      this.loadProducts();
    }
  }
  loadProducts = () => {
    const categoryName = this.props.match.params.categoryName;
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
    const categoryName = this.props.match.params.categoryName;
    console.log(products);
    return (
      <React.Fragment>
        <Slide data={categoryName} />
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
