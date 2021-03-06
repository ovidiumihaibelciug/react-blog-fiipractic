import {
    observable,
    action,
    decorate
} from "mobx";
import {
    GET_POSTS_PAGINATE,
    GET_ALL_TAGS,
    GET_ALL_CATEGORIES,
    GET_POST_BY_ID,
    ADD_COMMENT,
    ADD_POST
} from "../types";
import {
    client
} from "../apollo";

class PostStore {
    loading = true;
    posts = [];
    post = "";
    tags = [];
    categories = [];
    titles = [];

    handleLoading() {
        this.loading = !this.loading;
    }

    async getPosts() {
        const {
            data
        } = await client.query({
            query: GET_POSTS_PAGINATE
        });
        this.posts = data.posts;
        this.loading = false;
    }

    async getPostsPaginate(skip, limit = 5) {
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
                }
            }
        });
        let newPosts = data.posts;
        this.posts = newPosts;
        this.loading = false;
    }

    async getPostsByCategoryPaginate(skip, category, limit = 5) {
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
        this.posts = newPosts;
        this.loading = false;
    }

    async getPostsByTagPaginate(skip, tag, limit = 5) {
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
                    tagIds: tag
                }
            }
        });
        let newPosts = data.posts;
        this.posts = newPosts;
        this.loading = false;
    }

    async getPostById(id) {
        const {
            data
        } = await client.query({
            query: GET_POST_BY_ID,
            variables: {
                filters: {
                    _id: id
                }
            }
        });
        console.log(data.posts[0]);
        this.post = data.posts[0];
    }

    async getAllTags() {
        const {
            data
        } = await client.query({
            query: GET_ALL_TAGS
        });

        this.tags = data.tags;
    }

    async getAllCategories() {
        const {
            data
        } = await client.query({
            query: GET_ALL_CATEGORIES
        });

        this.categories = data.postCategories;
    }

    addComment(message, user, post) {
        client
            .mutate({
                variables: {
                    input: {
                        text: message,
                        userId: user,
                        postId: post
                    }
                },
                mutation: ADD_COMMENT
            })
            .then(result => console.log(result));
    }

    addPost(state, user) {
        const { title, description, category, tag } = state;
        client
            .mutate({
                variables: {
                    input: {
                        title: title,
                        description: description,
                        categoryId: category,
                        tagIds: [tag],
                        userId: user
                    }
                },
                mutation: ADD_POST
            })
            .then(result => console.log(result));
    }
}

decorate(PostStore, {
    loading: observable,
    text: observable,
    posts: observable,
    post: observable,
    tags: observable,
    categories: observable,
    titles: observable,
    handleLoading: action,
    getPosts: action,
    getPostsTitles: action,
    getPostsPaginate: action,
    getPostById: action,
    getAllTags: action,
    getAllCategories: action,
    getPostsByCategoryPaginate: action,
    getPostsByTagPaginate: action,
    addComment: action
});

export default PostStore;