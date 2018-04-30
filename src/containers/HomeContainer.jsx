import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withApollo } from "react-apollo";
import Navbar from "../components/Navbar";
import Post from "../components/Post/Post";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import SecondNavbar from "../components/SecondNavbar";
import PostsFeed from "../containers/PostsFeed";

const styles = {
    chip: {
        margin: 5
    },
    bcolor: "#7957D5"
};

class HomeContainer extends Component {
    componentWillMount() {
        const { match, rootStore } = this.props;

        const page = this.props.match.params.page
            ? this.props.match.params.page
            : 1;
        const category = this.props.match.params.category
            ? this.props.match.params.category
            : 0;
        const tag = this.props.match.params.tag ? this.props.match.params.tag : 0;

        if (!category && !tag) {
            this.props.rootStore.postStore.getPostsPaginate(page * 10);
        } else if (category) {
            this.props.rootStore.postStore.getPostsByCategoryPaginate(
                page * 10,
                category
            );
        } else if (tag) {
            this.props.rootStore.postStore.getPostsByTagPaginate(page * 10, tag);
        }
        this.props.rootStore.postStore.getAllTags();
        this.props.rootStore.postStore.getAllCategories();
    }

    render() {
        // let userStore = this.props.rootStore.userStore;
        console.log(this.props.match);
        let postStore = this.props.rootStore.postStore;
        const categories = this.props.rootStore.postStore.categories;
        const page = this.props.match.params.page
            ? parseInt(this.props.match.params.page)
            : 1;
        let path;
        if (!this.props.match.params.category && !this.props.match.params.tag) {
            path = "/home/";
        } else if (this.props.match.params.category) {
            path = "/category/" + this.props.match.params.category + "/";
        } else {
            path = "/tag/" + this.props.match.params.tag + "/";
        }

        let output = [];

        if (page === 1) {
            output = [
                <a href={path + page} className="page-active">
                    {page}
                </a>,
                <a href={path + (page + 1)}>{page + 1}</a>,
                <a href={path + (page + 2)}>{page + 2}</a>,
                <a href={path + (page + 3)}>
                    <i className="fa fa-arrow-right" />
                </a>
            ];
        } else {
            output = [
                <a href={path + (page - 2)}>
                    <i className="fa fa-arrow-left" />
                </a>,
                <a href={path + (page - 1)}>{page - 1}</a>,
                <a href={path + page} className="page-active">
                    {page}
                </a>,
                <a href={path + (page + 1)}>{page + 1}</a>,
                <a href={path + (page + 2)}>
                    <i className="fa fa-arrow-right" />
                </a>
            ];
        }

        return (
            <div className="home-box">
                <div className="container">
                    <div className="flex-row">
                        <div className="left-side">
                            <SecondNavbar categories={categories} title={"All categories"} />
                            <PostsFeed category={this.props.match.params.category} page={this.props.match.params.page} />
                            {/* {postStore.posts.map(post => {
                                return <Post post={post} />;
                            })} */}
                            <div className="post-links">{output}</div>
                        </div>
                        <div className="right-side">
                            <div className="box tags-box">
                                <div className="title">Tags</div>
                                <div className="tags">
                                    {postStore.tags.map(tag => (
                                        <a href={/tag/ + tag._id} className="tag">
                                            <Chip
                                                backgroundColor={styles.bcolor}
                                                style={styles.chip}
                                                labelColor="#fff"
                                            >
                                                <Avatar
                                                    size={32}
                                                    color="#fff"
                                                    backgroundColor="#8c67ef"
                                                >
                                                    {tag.name.substr(0, 2).toUpperCase()}
                                                </Avatar>
                                                {tag.name}
                                            </Chip>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="box categories-box">
                                <div className="title">Categories</div>
                                <div className="categories">
                                    {postStore.categories.map(category => (
                                        <a href={/category/ + category._id} className="category">
                                            <Chip
                                                backgroundColor="#8c67ef"
                                                style={styles.chip}
                                                labelColor="#fff"
                                            >
                                                <Avatar
                                                    size={32}
                                                    color="#fff"
                                                    backgroundColor={styles.bcolor}
                                                >
                                                    {category.name.substr(0, 2).toUpperCase()}
                                                </Avatar>
                                                {category.name}
                                            </Chip>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(HomeContainer)));
