import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const style = {
    borderColor: "#8c67ef"
};

class AddComment extends Component {
    state = {
        message: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.rootStore.postStore.addComment(
            this.state.message,
            this.props.user._id,
            this.props.post._id
        );
        window.location.reload();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        let { message } = this.state;
        return (
            <div className="box add-comment-section">
                <div className="title">Add Comments</div>
                <div className="comment-form">
                    <form onSubmit={this.handleSubmit} method="post">
                        <TextField
                            hintText="Message"
                            multiLine={true}
                            rows={2}
                            rowsMax={4}
                            fullWidth={true}
                            underlineFocusStyle={style}
                            name="message"
                            value={message}
                            onChange={this.handleChange}
                        />
                        <RaisedButton type="submit" label="Add comment" fullWidth={true} />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(AddComment)));
