import { observable, action, computed, decorate } from "mobx";
import { GET_POSTS, GET_POSTS_PAGINATE } from "../types";
import ApolloClient from "apollo-boost";
import { client } from "../apollo";
import { filter } from "async";

class PostStore {
  loading = true;
  text = "Lorem ipsum dolor situm";
  posts = [];

  handleLoading() {
    this.loading = !this.loading;
  }

  async getPosts() {
    console.log("1");
    const { data } = await client.query({
      query: GET_POSTS
    });
    console.log(data);
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
    console.log(data);
    let newPosts = data.posts;
    this.posts = newPosts;
    this.loading = false;
  }
}

decorate(PostStore, {
  loading: observable,
  text: observable,
  posts: observable,
  handleLoading: action,
  getPosts: action,
  getPostsPaginate: action
});

export default PostStore;
