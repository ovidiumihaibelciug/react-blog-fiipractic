import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

import NavSearch from '../components/NavSearch';

class Navbar extends Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-start">
                            <div className="navbar-brand">Brand</div>
                            {/* <NavSearch /> */}
                        </div>
                        <div className="navbar-end">
                            <NavLink to="/home" className="navbar-item navbar-dropdown">
                                Home
                            </NavLink>
                            <NavLink to="/addpost" className="navbar-item navbar-dropdown">
                                Add a post
                            </NavLink>
                            <div className="navbar-item navbar-dropdown">
                                <span>Hello, {user.firstname + " " + user.lastname}</span>
                                <div className="dropdown-content">
                                    <NavLink to={"/profile"} exact className="dropdown-link">
                                        <i className="fa fa-user" /> &nbsp; My Profile
                                    </NavLink>
                                    <NavLink to={"/login"} exact className="dropdown-link">
                                        <i className="fa fa-user" /> &nbsp; Log out
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

export default withRouter(inject(["rootStore"])(observer(Navbar)));