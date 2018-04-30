import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const style = {
    borderColor: "#8c67ef"
};

class AddPostContainer extends Component {
    state = {
        text: "",
        title: ""
    };

    //   handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.rootStore.postStore.addComment(
    //       this.state.message,
    //       this.props.user._id,
    //       this.props.post._id
    //     );
    //     window.location.reload();
    //   };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        let { text, title } = this.state;
        return (
            <div className="box add-comment-section">
                <div className="title">Add Post</div>
                <div className="comment-form">
                    <form onSubmit={this.handleSubmit} method="post">
                        <TextField
                            hintText="Title"
                            fullWidth={true}
                            underlineFocusStyle={style}
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                        <TextField
                            hintText="Text"
                            multiLine={true}
                            rows={2}
                            rowsMax={4}
                            fullWidth={true}
                            underlineFocusStyle={style}
                            name="text"
                            value={text}
                            onChange={this.handleChange}
                        />
                        <RaisedButton type="submit" label="Add post" fullWidth={true} />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(AddPostContainer)));
