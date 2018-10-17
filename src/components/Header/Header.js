import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Logo from "../Logo";
import Product from "../AddToCart/Product";
import ImageLogo from "../../assets/images/mf-logo-white.svg";

import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }
  renderList = cart => {
    console.log(cart);
    const list = cart.map(product => {
      return <Product key={product._id} product={product} />;
    });
    return list;
  };
  render() {
    console.log(this.props.cart);
    const { cart, filled } = this.props;

    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            <Logo src={ImageLogo} width="30px" height="30px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/terms">
                  Term + Conditions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/seating">
                  Seating
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/tables">
                  Tables
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/desks">
                  Desk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/storage">
                  Storage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/bedroom">
                  Bedroom
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/miscellaneous">
                  Misc
                </NavLink>
              </li>
            </ul>

            <span
              className="navbar-text container-minicart"
              onClick={() => this.setState({ isPaneOpen: true })}
            >
              <i class="material-icons minicart">shopping_cart</i>
            </span>
            <SlidingPane
              className="some-custom-class"
              overlayClassName="some-custom-overlay-class"
              isOpen={this.state.isPaneOpen}
              title="Carrito de compras"
              subtitle=""
              width="320px"
              onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                this.setState({ isPaneOpen: false });
              }}
            >
              <div className="products">{this.renderList(cart)}</div>
            </SlidingPane>
          </div>
        </nav>
      </header>
    );
  }
}
