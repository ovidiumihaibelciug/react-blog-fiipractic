import Login from "./views/Login";
import Home from "./views/Home";

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
  }
];
