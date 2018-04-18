import React, { Component } from "react";

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
                <span className="fa fa-search" />
                <input type="text" placeholder="Search books..." />
              </div>
            </div>
            <div className="navbar-end">
              <NavLink
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
