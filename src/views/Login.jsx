import React, { Component } from "react";

import LoginContainer from "../containers/LoginContainer";

export default class Login extends Component {
  render() {
    return (
      <section className="login-section">
        <LoginContainer />
      </section>
    );
  }
}
