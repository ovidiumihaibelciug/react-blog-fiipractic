import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navbar from '../components/Navbar';
import { withApollo } from 'react-apollo';

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
        {postStore.posts.map(post => {
          return (
            <div>
              {post.title}
              asdasdasda
            </div>
          )
        })}
      </div>
    );
  }
}

export default withRouter(inject(['rootStore'])(observer(HomeContainer)));
