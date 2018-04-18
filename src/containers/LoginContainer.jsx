import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  underlineStyle: {
    borderColor: "#4994F6"
  },
  floatingLabelFocusStyle: {
    color: "#4994F6"
  }
};

export default class LoginContainer extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="left-side">Log in to your blog account.</div>
        <div className="right-side">
          <div className="title">Log in</div>
          <div className="fields">
            <TextField
              hintText="Username"
              name="username"
              underlineFocusStyle={styles.underlineStyle}
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              name="password"
              type="password"
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          </div>
          <div>
            <RaisedButton
              label="Log in"
              backgroundColor="#4994F6"
              fullWidth={true}
              labelColor="white"
            />
            <div className="login-register">or register here</div>
          </div>
        </div>
      </div>
    );
  }
}
