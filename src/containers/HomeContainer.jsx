import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Pagination from '../components/Pagination';
import PostsFeed from "../containers/PostsFeed";
import SecondNavbar from "../components/SecondNavbar";
import SideSection from "../components/Post/SideSection";
import SideSectionItem from "../components/Post/SideSectionItem";

class HomeContainer extends Component {
    componentWillMount() {
        const { postStore } = this.props.rootStore;
        postStore.getAllTags();
        postStore.getAllCategories();
    }


    render() {
        let { rootStore, match } = this.props;
        let postStore = rootStore.postStore;
        const { categories, tags } = postStore;
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
                            <PostsFeed category={category} tag={tag} page={page} />
                            <div className="post-links">
                                {/* role 0 -> home */}
                                <Pagination role={role} page={page} ival={ival} />
                            </div>
                        </div>
                        <div className="home-items-section right-side">
                            <SideSection title="Tags">
                                {tags.map(tag => (
                                    <SideSectionItem key={tag._id} item={tag} role="tag"></SideSectionItem>
                                ))}
                            </SideSection>

                            <SideSection title="Categories">
                                {categories.map(category => (
                                    <SideSectionItem key={category._id} item={category} role="category"></SideSectionItem>
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
