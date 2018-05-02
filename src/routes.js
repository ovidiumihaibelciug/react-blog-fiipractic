import Home from "./views/Home";
import Login from "./views/Login";
import PostView from "./views/PostView";
import Profile from "./views/Profile";
import AddPost from "./views/AddPost";
import Users from "./views/Users";

export const routes = [
  {
    path: "/",
    component: Login
  },
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
    path: "/profile",
    component: Profile
  },
  {
    path: "/profile/:id",
    component: Profile
  },
  {
    path: "/category/:category",
    component: Home
  },
  {
    path: "/category/:category/:page",
    component: Home
  },
  {
    path: "/tag/:tag",
    component: Home
  },
  {
    path: "/tag/:tag/:page",
    component: Home
  },
  {
    path: "/addpost",
    component: AddPost
  },
  {
    path: "/users",
    component: Users
  }
];
