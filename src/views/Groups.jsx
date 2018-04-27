import React, { Component } from "react";

import GroupsContainer from "../containers/GroupsContainer";
import Navbar from "../components/Navbar";

export default class Groups extends Component {
  render() {
    return (
      <section className="post-section">
        <Navbar />
        <GroupsContainer />
      </section>
    );
  }
}
