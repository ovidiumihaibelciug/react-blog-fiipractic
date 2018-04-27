import { observable, action, computed, decorate } from "mobx";
import { GET_GROUPS } from "../types";
import ApolloClient from "apollo-boost";
import { client } from "../apollo";
import { filter } from "async";

class PostStore {
  loading = true;
  groups = [];
  group = {};

  async getGroups() {
    const { data } = await client.query({
      query: GET_GROUPS
    });
    this.groups = data.groups;
    this.loading = false;
  }
}

decorate(PostStore, {
  loading: observable,
  groups: observable,
  group: observable,
  getGroups: action
});

export default PostStore;
