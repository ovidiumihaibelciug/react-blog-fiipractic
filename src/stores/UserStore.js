import { observable, action, computed, decorate } from "mobx";

import { GET_USER_BY_ID } from "../types";
import { client } from "../apollo";

export default class UserStore {
  loading = true;
  user = {};

  handleLoading() {
    this.loading = !this.loading;
  }

  async getUserById(id) {
    const { data } = await client.query({
      query: GET_USER_BY_ID,
      variables: {
        filters: {
          _id: id
        }
      }
    });
    console.log(data.users[0]);
    this.user = data.users[0];
  }
}

decorate(UserStore, {
  loading: observable,
  user: observable,
  handleLoading: action,
  getUserById: action
});
