import { observable, action, computed, decorate } from "mobx";
import { GET_POSTS } from "../types";
import ApolloClient from "apollo-boost";
// import { withApollo } from "react-apollo";
import { client } from "../apollo";

class PostStore {
  loading = true;
  text = "Lorem ipsum dolor situm";
  posts = [];

  handleLoading() {
    this.loading = !this.loading;
  }

  async getPosts() {
    console.log(this.props);
    const { data } = await client.query({
      query: GET_POSTS
    });
    console.log(data);
    this.posts = data.posts;
    this.loading = false;
  }
}

decorate(PostStore, {
  loading: observable,
  text: observable,
  posts: observable,
  handleLoading: action,
  getPosts: action
});

export default PostStore;
