// import React, { Component, Fragment } from 'react';
// import { withRouter } from "react-router-dom";
// import { inject, observer } from "mobx-react";

// import { GET_POSTS_TITLES } from '../types';
// import { client } from '../apollo';

// class NavSearch extends Component {

//     state = {
//         data: '',
//         search: {},
//         loading: true
//     }

//     async getPostsTitles() {
//         const {
//             data
//         } = await client.query({
//             query: GET_POSTS_TITLES
//         });
//         this.setState({
//             data: data.posts,
//             loading: false
//         }, () => {
//             console.log(this.state)
//         });
//     }


//     componentWillMount() {
//         this.getPostsTitles();
//     }

//     handleChange = e => {
//         let { data } = this.state;
//         console.log(e.target.value)
//         let result = data.filter(item => item.title.includes(e.target.value));
//         this.setState({
//             search: result
//         })
//         console.log(result);
//     }

//     render() {
//         const { data, loading, search } = this.state;

//         return (
//             <div>
//                 <div className="navbar-search">
//                     <i className="fa fa-search" />
//                     <input type="text" placeholder="Search..." onChange={this.handleChange} />
//                 </div>
//                 <div className="nav-bar-results">
//                     {
//                         search.lenght ? search.map(item => {
//                             console.log("ITEM", item)
//                             return (
//                                 <div>{item.title}</div>
//                             )
//                         }) :
//                     }
//                 </div>
//             </div>

//         )
//     }
// }

// export default withRouter(inject(["rootStore"])(observer(NavSearch)));
