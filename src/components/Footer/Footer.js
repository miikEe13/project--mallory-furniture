import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageLogo from "../../assets/images/mallory-furniture-logo.png";
import Logo from "../Logo";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-botom">
        <div className="container">
          <div className="row container-logo">
            <Logo src={ImageLogo} width="" height="100px" />
          </div>
          <div className="row footer-row">
            <div className="col-sm-3 colum-footer footer-comppany">
              <ul>
                <li className="item-footer head-item"> Company</li>
                <li className="item-footer"> About</li>
                <li className="item-footer"> Press</li>
                <li className="item-footer"> Term + Conditions</li>
              </ul>
            </div>

            <div className="col-sm-3 colum-footer footer-categories">
              <ul>
                <li className="item-footer head-item"> Categories</li>
                <li className="item-footer">
                  <Link to="category/seating">Seating</Link>
                </li>
                <li className="item-footer">
                  <Link to="category/tables">Tables</Link>
                </li>
                <li className="item-footer">
                  <Link to="category/miscellaneous">Misc</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 colum-footer footer-social">
              <ul>
                <li className="item-footer head-item"> Social</li>
                <li className="icons">
                  <a target="_blank" href="https://www.facebook.com/">
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a target="_blank" href="https://www.pinterest.com.mx/">
                    <i class="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a target="_blank" href="https://twitter.com/miikEe12">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
