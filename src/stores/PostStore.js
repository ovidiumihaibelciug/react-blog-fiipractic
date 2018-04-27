import { observable, action, computed, decorate } from "mobx";
import {
  GET_POSTS,
  GET_POSTS_PAGINATE,
  GET_ALL_TAGS,
  GET_ALL_CATEGORIES,
  GET_POST_BY_ID
} from "../types";
import ApolloClient from "apollo-boost";
import { client } from "../apollo";
import { filter } from "async";

class PostStore {
  loading = true;
  text = "Lorem ipsum dolor situm";
  posts = [];
  post = "";
  tags = [];
  categories = [];

  handleLoading() {
    this.loading = !this.loading;
  }

  async getPosts() {
    console.log("1");
    const { data } = await client.query({
      query: GET_POSTS
    });
    this.posts = data.posts;
    this.loading = false;
  }

  async getPostsPaginate(skip, limit = 5) {
    const { data } = await client.query({
      query: GET_POSTS_PAGINATE,
      variables: {
        options: { skip: skip, limit: limit, sort: { createdAt: -1 } }
      }
    });
    let newPosts = data.posts;
    this.posts = newPosts;
    this.loading = false;
  }

  async getPostById(id) {
    const { data } = await client.query({
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
    const { data } = await client.query({
      query: GET_ALL_TAGS
    });

    this.tags = data.tags;
  }

  async getAllCategories() {
    const { data } = await client.query({
      query: GET_ALL_CATEGORIES
    });

    this.categories = data.postCategories;
  }
}

decorate(PostStore, {
  loading: observable,
  text: observable,
  posts: observable,
  post: observable,
  tags: observable,
  categories: observable,
  handleLoading: action,
  getPosts: action,
  getPostsPaginate: action,
  getPostById: action,
  getAllTags: action,
  getAllCategories: action
});

export default PostStore;
