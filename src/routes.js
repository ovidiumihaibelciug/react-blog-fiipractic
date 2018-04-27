import Home from "./views/Home";
import Login from "./views/Login";
import PostView from "./views/PostView";

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
  }
];
