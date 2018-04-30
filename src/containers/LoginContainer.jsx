import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";

const styles = {
  underlineStyle: {
    borderColor: "#7957D5"
  },
  floatingLabelFocusStyle: {
    color: "#7957D5"
  }
};

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    // validation -> check just username
    // if validation
    this.props.history.push("/home");
    // else alert
  };

  render() {
    return (
      <div className="login-box">
        <div className="left-side"> Lorem ipsum dolor sit amet. </div>
        <div className="right-side">
          <form onSubmit={this.handleSubmit} method="POST">
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
                type="submit"
                label="Log in"
                backgroundColor="#7957D5"
                fullWidth={true}
                labelColor="white"
              />
              <div className="login-register">or register here</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginContainer);
