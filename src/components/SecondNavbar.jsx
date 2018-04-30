import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SecondNavbar extends Component {
    render() {
        let { title, categories } = this.props;
        return (
            <div className="secondary-nav">
                <div className="secondary-nav-start">{title}</div>
                <div className="secondary-nav-end">
                    <Link to="/home" className={"navbar-item"}>
                        All categories
                    </Link>
                    {categories.map(category => {
                        let activeClass =
                            category._id === this.props.match.params.category
                                ? "active-secnav"
                                : "";
                        return (
                            <Link
                                to={"/category/" + category._id}
                                key={category._id}
                                className={"navbar-item " + activeClass}
                            >
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(SecondNavbar);
