import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
        email: "",
        password: "",
        errors: []
    };

    handleSubmit = e => {
        e.preventDefault();
        const { userStore } = this.props.rootStore;
        const { email } = this.state;
        const { history } = this.props;
        let errors = [];

        userStore.getUSerByEmail(email);

        if (userStore.loggedUser !== 0) {
            history.push('/home');
        } else {
            errors = [...errors, 'Wrong email'];
            this.setState({ errors });
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { email, password, errors } = this.state;
        return (
            <div className="login-box">
                <div className="left-side"> Lorem ipsum dolor sit amet. </div>
                <div className="right-side">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="title">Log in</div>
                        <div className="fields">
                            <TextField
                                value={email}
                                onChange={this.handleChange}
                                type="email"
                                hintText="Email"
                                name="email"
                                underlineFocusStyle={styles.underlineStyle}
                                errorText={errors[0]}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                value={password}
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                underlineFocusStyle={styles.underlineStyle}
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                errorText={errors[0]}
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

export default withRouter(inject(["rootStore"])(observer(LoginContainer)));
