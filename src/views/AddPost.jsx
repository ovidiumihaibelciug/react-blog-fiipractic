import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AddPostContainer from "../containers/AddPostContainer";

class Addpost extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AddPostContainer />
      </div>
    );
  }
}

export default Addpost;
