import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import User from '../components/User/User';

export class UsersContainer extends Component {

    state = {
        loading: true,
        users: {}
    }

    componentWillMount() {
        const { userStore } = this.props.rootStore;
        userStore.getUsers().then(() => {
            this.setState({
                loading: false,
                users: userStore.users
            })
        });
    }

    render() {
        const { loading, users } = this.state;
        return (
            <div>
                {
                    loading ? <div>loading</div> : <div className="container users-container">
                        {
                            users.map(user => (
                                <User user={user} />
                            ))
                        }</div>
                }
            </div>
        )
    }
}

export default withRouter(inject(["rootStore"])(observer(UsersContainer)));
