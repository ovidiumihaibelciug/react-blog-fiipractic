import { observable, action, computed, decorate } from "mobx";

export default class UserStore {
  loading = true;
  text = "Lorem ipsum dolor situm";

  handleLoading() {
    this.loading = !this.loading;
  }
}

decorate(UserStore, {
  loading: observable,
  handleLoading: action
});
