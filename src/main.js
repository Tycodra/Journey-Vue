import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import user_data from "./user-data";

Vue.config.productionTip = false;

let data = {
  activities: user_data,
  bucketlist: ["Scuba Diving", "Biking", "Exploring", "Museums"],
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
