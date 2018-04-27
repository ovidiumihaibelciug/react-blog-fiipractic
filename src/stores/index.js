import UserStore from "./UserStore";
import PostStore from "./PostStore";
import GroupStore from "./GroupStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
    this.groupStore = new GroupStore(this);
  }
}
