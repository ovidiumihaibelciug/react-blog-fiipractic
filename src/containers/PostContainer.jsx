import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Post from "../components/Post/Post";
import Comment from "../components/Post/Comment";
import AddComment from "../containers/AddComment";

class PostContainer extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.rootStore.postStore.getPostById(id);
    }

    render() {
        let post = this.props.rootStore.postStore.post;
        let defaultImg = "http://our.news/img/default-publisher.png";
        return (
            <div className="post-box">
                {!this.props.rootStore.postStore.post ? (
                    <div>Loading...</div>
                ) : (
                        <div className="container">
                            <div className="flex-row">
                                <div className="left-side">
                                    <Post
                                        post={this.props.rootStore.postStore.post}
                                        single={true}
                                    />
                                    <div className="box box-comments">
                                        <div className="title">
                                            Comments {post.comments ? post.comments.length : 0 + " "}
                                            <i className="fa fa-comment" />
                                        </div>
                                    </div>
                                    <AddComment post={post} user={post.user} />

                                    {post.comments && post.comments
                                        .reverse()
                                        .map(comment => <Comment comment={comment} />)}
                                </div>
                                <div className="right-side">
                                    <div className="box user-post-box">
                                        <div
                                            className="profile-img"
                                            style={{
                                                backgroundImage: `url("${defaultImg}")`
                                            }}
                                        />
                                        <div className="fullname">
                                            <a href={/profile/ + post.user._id}>
                                                {post.user.firstname + " " + post.user.lastname}
                                            </a>
                                        </div>
                                        <div className="email">{post.user.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(PostContainer)));
