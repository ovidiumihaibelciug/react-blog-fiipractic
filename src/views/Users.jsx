import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import UsersContainer from '../containers/UsersContainer';

class Users extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <UsersContainer />
            </div>
        )
    }
}

export default Users;
