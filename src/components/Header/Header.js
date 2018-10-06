import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../Logo";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            <Logo />
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
                <NavLink className="nav-link" to="/">
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
            <span className="navbar-text">carrito</span>
          </div>
        </nav>
      </header>
    );
  }
}
