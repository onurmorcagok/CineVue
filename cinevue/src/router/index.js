import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import store from "../store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: import("../views/NowPlaying.vue"),
  },
  {
    path: "/top-rated",
    name: "TopRated",
    component: import("../views/TopRated.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: import("../views/Upcoming.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/Register.vue"),

    beforeSign: (next) => {
      const isLogin = store.getters["users/isLogin"];
      if (isLogin) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: import("../views/SignIn.vue"),
  },
  {
    path: "/watchList",
    name: "WatchList",
    component: import("../views/WatchList.vue"),
  },
  {
    path: "/search/:movieName",
    name: "Search",
    component: import("../views/SearchMovies.vue"),
  },
  {
    path: "/movie-detail/:movieID",
    name: "MovieDetail",
    component: import("../views/MovieDetail.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
