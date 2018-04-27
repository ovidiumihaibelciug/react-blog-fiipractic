import React, { Component } from "react";

import ProfileContainer from "../containers/ProfileContainer";
import Navbar from "../components/Navbar";

export default class Profile extends Component {
  render() {
    return (
      <section className="post-section">
        <Navbar />
        <ProfileContainer />
      </section>
    );
  }
}
