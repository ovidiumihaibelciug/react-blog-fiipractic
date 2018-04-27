import React, { Component } from "react";

import HomeContainer from "../containers/HomeContainer";
import Navbar from "../components/Navbar";

export default class Login extends Component {
  render() {
    return (
      <section className="home-section">
        <Navbar />
        <HomeContainer />
      </section>
    );
  }
}
