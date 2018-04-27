import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";
import Navbar from "../components/Navbar";

export default class Login extends Component {
  render() {
    return (
      <section className="post-section">
        <Navbar />
        <PostContainer />
      </section>
    );
  }
}
