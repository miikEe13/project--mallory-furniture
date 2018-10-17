import React, { Component } from "react";

export default class Filters extends Component {
  handleClickAll = () => {
    const { onFilter } = this.props;
    onFilter("all");
  };
  handleClickSale = () => {
    const { onFilter } = this.props;
    onFilter("sale");
  };
  render() {
    return (
      <div className="container category-list-filter">
        <div className="row">
          <div className="col-sm-12 filters">
            <button
              type="button"
              className="all-filter btn btn-secondary btn-md"
              onClick={this.handleClickAll}
            >
              All products
            </button>
            <button
              type="button"
              className="onsale-filter btn btn-secondary btn-md"
              onClick={this.handleClickSale}
            >
              Sale
            </button>
          </div>
        </div>
      </div>
    );
  }
}
