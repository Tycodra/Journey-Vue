import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyJourneyView from "../views/MyJourneyView.vue";
import BucketListView from "../views/BucketListView.vue";
import ExploreView from "../views/ExploreView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/myJourney",
    name: "MyJourney",
    component: MyJourneyView,
  },
  {
    path: "/bucketList",
    name: "BucketList",
    component: BucketListView,
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
