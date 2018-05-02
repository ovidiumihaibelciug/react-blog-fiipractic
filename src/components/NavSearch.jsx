import React, { Component, Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { GET_POSTS_TITLES } from '../types';
import { client } from '../apollo';

class NavSearch extends Component {

    state = {
        data: '',
        search: {},
        dataLength: '',
        input: '',
        loading: true
    }

    async getPostsTitles() {
        const {
            data
        } = await client.query({
            query: GET_POSTS_TITLES
        });
        this.setState({
            data: data.posts,
            loading: false,
        }, () => {
            console.log(this.state)
        });
    }


    componentWillMount() {
        this.getPostsTitles();
    }

    handleChange = e => {
        let { data } = this.state;
        console.log(e.target.value)
        let result = data.filter(item => item.title.includes(e.target.value));
        this.setState({
            search: result,
            input: e.target.value
        })
        console.log(result);
    }

    render() {
        const { data, loading, search, input } = this.state;
        console.log("SEARCH: ", search);
        console.log(search.length);


        return (
            <div>
                <div className="navbar-search navbar-dropdown">
                    <i className="fa fa-search" />
                    <input type="text" placeholder="Search..." onChange={this.handleChange} />
                    {
                        search.length && input ? <div className="nav-bar-results dropdown-content">
                            {
                                search.map(item => {
                                    console.log("ITEM", item)
                                    return (
                                        <Link className="nav-result-item" key={item._id} to={'/post/' + item._id}>{item.title}</Link>
                                    )
                                })
                            }
                        </div>
                            : ''
                    }
                </div>
            </div>

        )
    }
}

export default withRouter(inject(["rootStore"])(observer(NavSearch)));
