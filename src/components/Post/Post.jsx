import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-box">
        <Card>
          <CardTitle
            className="post-title"
            title={<a>{post.title}</a>}
            subtitle={
              <a href="/">
                {"Posted by " + post.user.lastname + " " + post.user.firstname}
              </a>
            }
          />
          <CardText>{post.description}</CardText>
          <CardActions>
            <a href="">
              <FlatButton
                className="btn-blog-primary"
                label={<i className="fa fa-2x fa-eye" />}
                labelPosition="before"
                primary={true}
              />
            </a>
            <a href="">
              <FlatButton
                className="btn-blog-primary"
                label={<i className="fa fa-2x fa-comment" />}
                labelPosition="before"
                primary={true}
              />
            </a>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Post;
