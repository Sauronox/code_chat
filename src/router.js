import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Messenger from "./views/Messenger.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", // index
      name: "home",
      component: Home // Composant HOME
    },
    {
      path: "/messenger",
      name: "messenger",
      component: Messenger
    }
  ]
});
