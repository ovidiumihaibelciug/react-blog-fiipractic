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
                                <i className="fa fa-search" />
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
                            <NavLink to="/addpost" className="navbar-item navbar-dropdown">
                                Add a post
              </NavLink>
                            <div className="navbar-item navbar-dropdown">
                                <span>Hello, Ovidiu</span>
                                <div className="dropdown-content">
                                    <NavLink to={"/profile"} exact className="dropdown-link">
                                        <i className="fa fa-user" /> &nbsp; My Profile
                  </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
