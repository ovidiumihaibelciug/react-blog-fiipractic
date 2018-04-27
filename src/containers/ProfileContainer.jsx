import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Navbar from "../components/Navbar";
import Post from "../components/Post/Post";
import Chip from "material-ui/Chip";
import FlatButton from "material-ui/FlatButton";

const styles = {
  chip: {
    margin: 10
  },
  bcolor: "#7957D5"
};

class ProfileContainer extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.props.rootStore.userStore.getUserById(id);
    }
  }

  render() {
    let { user } = this.props.rootStore.userStore;
    return (
      <div className="container user-container">
        {!user.groups && !user.posts ? (
          <div>Loading...</div>
        ) : (
          <div className="flex-row">
            <div className="box user-box">
              <div className="groups">
                {user.groups.map(group => (
                  <Chip
                    backgroundColor={styles.bcolor}
                    style={styles.chip}
                    labelColor="#fff"
                  >
                    {group.name}
                  </Chip>
                ))}
              </div>
              <h3 className="title">{user.firstname + " " + user.lastname}</h3>
              <div className="subtitle">{user.email}</div>
              <div className="user-posts">Posts</div>
              {user.posts.map(
                post => (!post.category ? "" : <Post post={post} />)
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(inject(["rootStore"])(observer(ProfileContainer)));
