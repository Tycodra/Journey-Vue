<template>
  <div class="explore-results">
    <div class="row">
      <h1>{{ title }}</h1>
      <input
        @submit="search"
        @input="search"
        v-model="query"
        placeholder="Search"
      />
    </div>
    <div class="row activities-block">
      <activity-card
        v-for="activity in filteredActivities"
        :key="activity.id"
        v-bind:image="activity.path"
        v-bind:title="activity.title"
        v-bind:description="activity.description"
      ></activity-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import SyntheticActivityCard from "./SyntheticActivityCard.vue";
import ActivityCard from "./ActivityCard.vue";
let photoAPIKey = "563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed";

export default {
  name: "explore-results",
  props: {
    title: String,
  },
  data: function () {
    return {
      activities: [],
      filteredActivities: [],
      query: "",
    };
  },
  components: {
    ActivityCard,
    // SyntheticActivityCard,
  },
  created() {
    this.getActivities();
    this.query = this.title;
    this.search();
    // this.fetch();
  },
  methods: {
    async getActivities() {
      try {
        let activities = await axios.get("/api/activities");

        this.activities = activities.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    search() {
      this.filteredActivities = this.activities.filter((activity) =>
        `${activity.type} ${activity.title} ${activity.description}`.includes(
          this.query
        )
      );
    },
    fetch: function () {
      fetch(`https://api.pexels.com/v1/search?query=${this.title}`, {
        headers: {
          Authorization: photoAPIKey,
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          console.log(data.photos);

          for (let i = 0; i < 10; i++) {
            let activity = {};
            activity.id = data.photos[i].id;
            activity.src = data.photos[i].src.portrait;
            activity.description = data.photos[i].alt;

            this.activities.push(activity);
          }
        });
    },
  },
};
</script>

<style scoped>
.explore-results {
  text-align: center;
  padding: 1rem;
  border: solid 3px rgb(114, 114, 114);
  border-radius: 0.25rem;
  background-color: rgb(196, 195, 195);
  margin-top: 1rem;
  margin-bottom: 30px;
}
.activities-block {
  background-color: darkgray;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
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
