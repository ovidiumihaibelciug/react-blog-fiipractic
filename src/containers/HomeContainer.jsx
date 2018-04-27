import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withApollo } from "react-apollo";
import Navbar from "../components/Navbar";
import Post from "../components/Post/Post";

class HomeContainer extends Component {
  componentWillMount() {
    this.props.rootStore.postStore.getPosts();
  }

  render() {
    // let userStore = this.props.rootStore.userStore;
    let postStore = this.props.rootStore.postStore;

    return (
      <div className="home-box">
        <Navbar />
        <div className="container">
          <div className="flex-row">
            <div className="left-side">
              {postStore.posts.map(post => {
                return <Post post={post} />;
              })}
            </div>
            <div className="right-side" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(inject(["rootStore"])(observer(HomeContainer)));
