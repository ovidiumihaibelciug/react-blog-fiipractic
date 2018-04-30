import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import Navbar from "../components/Navbar";
import Post from "../components/Post/Post";
import PostsFeed from "../containers/PostsFeed";
import SecondNavbar from "../components/SecondNavbar";
import SideSection from "../components/Post/SideSection";
import SideSectionItem from "../components/Post/SideSectionItem";

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
                            <div className="post-links">{output}</div>
                        </div>
                        <div className="home-items-section right-side">
                            <SideSection title="Tags">
                                {postStore.tags.map(tag => (
                                    <SideSectionItem item={tag} role="tag"></SideSectionItem>
                                ))}
                            </SideSection>

                            <SideSection title="Categories">
                                {postStore.categories.map(category => (
                                    <SideSectionItem item={category} role="category"></SideSectionItem>
                                ))}
                            </SideSection>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(HomeContainer)));
