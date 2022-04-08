<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <!-- https://medium.com/actualize-network/prototyping-with-vue-js-and-bootstrap-2404efe93d6 -->
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + title"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="title"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
    >
      <div class="accordion-body">
        <div class="row activities-block">
          <activity-card
            v-for="activity in activities"
            :key="activity.id"
            v-bind:image="activity.path"
            v-bind:title="activity.title"
            v-bind:description="activity.description"
          ></activity-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ActivityCard from "./ActivityCard.vue";

export default {
  name: "activityBox",
  data() {
    return {
      activities: [],
    };
  },
  props: {
    title: String,
  },
  components: {
    ActivityCard,
  },
  created() {
    this.getActivities();
  },
  methods: {
    async getActivities() {
      try {
        let activities = await axios.get("/api/activities/" + this.title);
        this.activities = activities.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.accordion-item {
  background-color: rgb(151, 150, 150);
}
.accordion-button {
  padding: 0.25rem 1.25rem;
  background-color: rgb(207, 206, 206);
}
.accordion-button:not(.collapsed) {
  background-color: #d8f1e9;
  color: rgb(95, 95, 95);
}
.activities-block {
  background-color: darkgray;
  border-radius: 0.25rem;
  height: 27rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: normal;
}
.card {
  margin: 0.25rem;
}
.row {
  /* justify-content: space-evenly; */
  text-align: center;
  margin-left: 0;
  margin-right: 0;
  /* margin-top: 1rem; */
}
</style>
