import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navbar from '../components/Navbar';

class HomeContainer extends Component {

  render() {
    let userStore = this.props.rootStore.userStore;
    return (
      <div className="home-box">
        <Navbar />
        {userStore.text}
      </div>
    );
  }
}

export default withRouter(inject(['rootStore'])(observer(HomeContainer)));
