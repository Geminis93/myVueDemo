import Vue from "vue";
import Router from "vue-router";
import charts from "./views/Charts/Charts.vue";
import photos from "./views/Photos/Photos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/charts",
      name: "charts",
      component: charts,
      // alias: '/' // 别名
      // redirect: '/'  // 重定向
    },
    {
      path: "/photos",
      name: "photos",
      component: photos
    }
  ]
});
