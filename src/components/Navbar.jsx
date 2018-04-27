import React, { Component } from "react";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-start">
              <div className="navbar-brand">Brand</div>
              <div className="navbar-search">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="navbar-end">
              {/* <NavLink
                to="/"
                exact
                className="navbar-item"
                activeClassName="active-item"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                exact
                className="navbar-item"
                activeClassName="active-item"
              >
                Register
              </NavLink> */}
              <NavLink to="/home" className="navbar-item navbar-dropdown">
                Home
              </NavLink>
              <div className="navbar-item navbar-dropdown">
                <span>Hello, Ovidiu</span>
                {/* <a href="" class="">My Books</a> */}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
