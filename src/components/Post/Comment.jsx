import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

class Comment extends Component {
    render() {
        const { comment } = this.props;
        return (
            <div className="comment-box">
                <Card>
                    <CardTitle
                        className="comment-title"
                        title={<a>{comment.title}</a>}
                        subtitle={
                            <a href={"/profile/" + comment.user._id}>
                                {"Commented by " +
                                    comment.user.lastname +
                                    " " +
                                    comment.user.firstname}
                            </a>
                        }
                    />
                    <CardText>{comment.text}</CardText>
                </Card>
            </div>
        );
    }
}

export default Comment;
