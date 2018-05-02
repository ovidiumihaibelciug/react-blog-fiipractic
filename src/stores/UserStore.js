import { observable, action, decorate } from "mobx";

import { GET_USER } from "../types";
import { client } from "../apollo";

export default class UserStore {
  loading = true;
  user = {};
  loggedUser = {};

  handleLoading() {
    this.loading = !this.loading;
  }

  setUSer(user) {
    this.loggedUser = user;
  }

  async getUserById(id) {
    const { data } = await client.query({
      query: GET_USER,
      variables: {
        filters: {
          _id: id
        }
      }
    });
    this.user = data.users[0];
  }

    async getUSerByEmail(email) {
        const { data } = await client.query({
            query: GET_USER,
            variables: {
                filters: {
                    email: email
                }
            }
       })
       if (data.users) {
           this.loggedUser = data.users[0];
           localStorage.setItem('user', JSON.stringify(this.loggedUser));      
       } else {
           this.loggedUser = 0;
       }
    }
}

decorate(UserStore, {
  loading: observable,
  user: observable,
  loggedUser: observable,
  handleLoading: action,
  getUserById: action,
  getUSerByEmail: action
});
