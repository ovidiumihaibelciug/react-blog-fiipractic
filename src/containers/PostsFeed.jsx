import React, { Component } from 'react'
import { GET_POSTS_PAGINATE } from '../types';
import { client } from '../apollo';
import Post from '../components/Post/Post';

class PostsFeed extends Component {

    state = {
        loading: true,
        posts: {}
    }

    async posts(skip, category, limit = 5) {
        const {
            data
        } = await client.query({
            query: GET_POSTS_PAGINATE,
            variables: {
                options: {
                    skip: skip,
                    limit: limit,
                    sort: {
                        createdAt: -1
                    }
                },
                filters: {
                    categoryId: category
                }
            }
        });
        let newPosts = data.posts;
        this.setState({
            posts: newPosts,
            loading: false
        });
    }


    componentWillReceiveProps(nextProps) {
        const { page, category } = nextProps;
        this.posts(page * 10, category);
    }

    render() {
        return (
            <section className="section-postsfeed">
                {
                    !this.state.loading && this.state.posts.map(post => {
                        return <Post post={post}></Post>
                    })
                }
            </section>
        )
    }
}

export default PostsFeed
