import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withApollo } from "react-apollo";
import Navbar from "../components/Navbar";
import Post from "../components/Post/Post";

class HomeContainer extends Component {
  componentWillMount() {
    //fetch by page
    const page = this.props.match.params.page
      ? this.props.match.params.page
      : 1;
    this.props.rootStore.postStore.getPostsPaginate(page * 10);
    console.log(page);
  }

  render() {
    // let userStore = this.props.rootStore.userStore;
    let postStore = this.props.rootStore.postStore;
    const page = this.props.match.params.page
      ? parseInt(this.props.match.params.page)
      : 1;
    const path = "/home/";

    let output = [];
    output = [];

    if (page === 1) {
      output = [
        <a href={path + page} className="page-active">
          {page}
        </a>,
        <a href={path + (page + 1)}>{page + 1}</a>,
        <a href={path + (page + 2)}>{page + 2}</a>,
        <a href={path + (page + 3)}>
          <i className="fa fa-arrow-right" />
        </a>
      ];
    } else {
      output = [
        <a href={path + (page - 2)}>
          <i className="fa fa-arrow-left" />
        </a>,
        <a href={path + (page - 1)}>{page - 1}</a>,
        <a href={path + page} className="page-active">
          {page}
        </a>,
        <a href={path + (page + 1)}>{page + 1}</a>,
        <a href={path + (page + 2)}>
          <i className="fa fa-arrow-right" />
        </a>
      ];
    }

    return (
      <div className="home-box">
        <Navbar />
        <div className="container">
          <div className="flex-row">
            <div className="left-side">
              {postStore.posts.map(post => {
                return <Post post={post} />;
              })}
              <div className="post-links">{output}</div>
            </div>
            <div className="right-side" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(inject(["rootStore"])(observer(HomeContainer)));
