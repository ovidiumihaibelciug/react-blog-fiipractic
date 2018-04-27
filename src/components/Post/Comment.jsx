import React, { Component } from "react";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";
import FlatButton from "material-ui/FlatButton";

const styles = {
  chip: {
    marginTop: -10,
    marginBottom: 10,
    marginRight: 4
  },
  bcolor: "#7957D5"
};

class Comment extends Component {
  render() {
    const { comment, single } = this.props;
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
