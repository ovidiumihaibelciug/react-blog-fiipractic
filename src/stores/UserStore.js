import { observable, action, decorate } from "mobx";

import { GET_USER, GET_USERS } from "../types";
import { client } from "../apollo";

export default class UserStore {
  loading = true;
  user = {};
  loggedUser = {};
  users = {};

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

    async getUsers() {
        const { data } = await client.query({
            query: GET_USERS,
        });
        console.log("DATA: ", data.users);
        this.users = data.users;
        this.loading = false;
    }
}

decorate(UserStore, {
  loading: observable,
  user: observable,
  users: observable,
  loggedUser: observable,
  handleLoading: action,
  getUserById: action,
  getUSerByEmail: action,
  getUSers: action
});
