import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const style = {
    borderColor: "#8c67ef"
};

class AddPostContainer extends Component {
    state = {
        title: "",
        description: "",
        category: null,
        tag: null,
    };

    componentWillMount() {
        const { rootStore } = this.props;
        rootStore.postStore.getAllTags();
        rootStore.postStore.getAllCategories();
        console.log("TAG", rootStore.postStore.tags);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { history } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));

        this.props.rootStore.postStore.addPost(
            this.state,
            user._id
        )
        history.push('/profile/' + user._id);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCategoryChange = (event, index, value) => {
        console.log(event.ref);
        this.setState({
            category: value
        });
    }

    handleTagChange = (event, index, value) => {
        this.setState({
            tag: value
        });
    }

    render() {
        let { title, description, category, tag } = this.state;
        const { tags, categories } = this.props.rootStore.postStore;
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
                            hintText="Description"
                            fullWidth={true}
                            underlineFocusStyle={style}
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                        <SelectField
                            floatingLabelText="Category"
                            value={category}
                            name="category"
                            onChange={this.handleCategoryChange}
                            fullWidth={true}
                            underlineFocusStyle={style}
                        >
                            <MenuItem value={null} primaryText="" />
                            {
                                categories.map(category => (
                                    <MenuItem value={category._id} primaryText={category.name} />
                                ))
                            }
                        </SelectField>
                        <SelectField
                            floatingLabelText="Tag"
                            name="tag"
                            value={tag}
                            onChange={this.handleTagChange}
                            fullWidth={true}
                            underlineFocusStyle={style}
                        >
                            {
                                tags.map(tag => (
                                    <MenuItem value={tag._id} primaryText={tag.name} />
                                ))
                            }
                        </SelectField>

                        <RaisedButton type="submit" backgroundColor="#8c67ef" labelColor="#fff" label="Add post" fullWidth={true} />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(AddPostContainer)));
