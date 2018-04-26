import UserStore from "./UserStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
  }
}
