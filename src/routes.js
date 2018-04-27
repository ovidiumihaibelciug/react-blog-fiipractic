import Home from "./views/Home";
import Login from "./views/Login";
import PostView from "./views/PostView";
import Groups from "./views/Groups";
import Group from "./views/Group";
import Profile from "./views/Profile";

export const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/home/:page",
    component: Home
  },
  {
    path: "/post/:id",
    component: PostView
  },
  {
    path: "/groups",
    component: Groups
  },
  {
    path: "/group/:id",
    component: Group
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/profile/:id",
    component: Profile
  }
];
