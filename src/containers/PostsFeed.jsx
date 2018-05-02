import React, { Component } from 'react'
import { GET_POSTS_PAGINATE } from '../types';
import { client } from '../apollo';
import Post from '../components/Post/Post';

class PostsFeed extends Component {

    state = {
        loading: true,
        posts: {}
    }

    async posts(skip, tag, category, limit = 5) {
        skip = skip ? skip : 0;
        const variables = category ? {
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
        } : {
                options: {
                    skip: skip,
                    limit: limit,
                    sort: {
                        createdAt: -1
                    }
                },
                filters: {
                    tagIds: tag
                }
            };
        const {
            data
        } = await client.query({
            query: GET_POSTS_PAGINATE,
            variables: variables
        });
        let newPosts = data.posts;
        this.setState({
            posts: newPosts,
            loading: false
        });
    }

    async getPosts(page, limit = 10) {
        const variables = {
            options: {
                skip: parseInt(page),
                limit: parseInt(limit),
            },
        }

        const {
            data
        } = await client.query({
            query: GET_POSTS_PAGINATE,
            variables: variables
        });
        this.setState({
            posts: data.posts,
            loading: false
        });
    }

    componentWillReceiveProps(nextProps) {
        const { page, category, tag } = nextProps;
        if (!category && !tag) {
            this.getPosts(page * 10, 10);
        } else {
            this.posts(page * 10, tag, category);
        }
    }

    render() {
        return (
            <section className="section-postsfeed">

                {
                    !this.state.loading && this.state.posts.map(post => {
                        return <Post post={post} key={post._id} ></Post>
                    })
                }
            </section>
        )
    }
}

export default PostsFeed
