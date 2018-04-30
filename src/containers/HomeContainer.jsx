import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import Navbar from "../components/Navbar";
import Pagination from '../components/Pagination';
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

    componentWillReceiveProps(nextProps) {
        const { match, rootStore } = nextProps;
        // console.log(nextProps);

    }

    render() {
        let { rootStore, match } = this.props;
        let postStore = rootStore.postStore;
        const categories = postStore.categories;
        let { page, category, tag } = match.params;
        let role;
        let ival;
        if (!tag && !category) {
            role = 'home';
            ival = 0;
        } else if (tag) {
            role = 'tag';
            ival = tag;
        } else {
            role = 'category';
            ival = category;
        }
        page = page ? parseInt(page) : 1;

        return (
            <div className="home-box">
                <div className="container">
                    <div className="flex-row">
                        <div className="left-side">
                            <SecondNavbar categories={categories} title={"All categories"} />
                            <PostsFeed category={category} page={page} />
                            <div className="post-links">
                                {/* role 0 -> home */}
                                <Pagination role={role} page={page} ival={ival} />
                            </div>
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
