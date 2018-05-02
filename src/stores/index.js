import UserStore from "./UserStore";
import PostStore from "./PostStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
  }
}
