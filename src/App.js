import React, { Component } from "react";

import "./assets/scss/App.css";
import RaisedButton from "material-ui/RaisedButton";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RaisedButton label="Default" />
      </div>
    );
  }
}
