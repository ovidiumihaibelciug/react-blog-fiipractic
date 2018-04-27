import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { withRouter } from "react-router";

class SecondNavbar extends Component {
  render() {
    let { title, categories } = this.props;
    return (
      <div className="secondary-nav">
        <div className="secondary-nav-start">{title}</div>
        <div className="secondary-nav-end">
          <a href={"/home"} className={"navbar-item"}>
            All categories
          </a>
          {categories.map(category => {
            let activeClass =
              category._id == this.props.match.params.category
                ? "active-secnav"
                : "";
            return (
              <a
                href={"/category/" + category._id}
                key={category.name}
                className={"navbar-item " + activeClass}
              >
                {category.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(SecondNavbar);
