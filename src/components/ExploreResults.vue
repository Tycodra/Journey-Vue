<template>
  <div class="explore-results">
    <div class="row">
      <h1>{{ searchTitle }}</h1>
      <form
        v-on:submit.prevent="search"
        id="explore_form"
        class="d-flex explore-form"
      >
        <input
          id="explore-input"
          v-model="query"
          class="form-control me-2"
          type="search"
          placeholder="hiking, drawing, etc."
          aria-label="Search"
        />
      </form>
    </div>
    <div class="row activities-block">
      <activity-card
        v-for="activity in filteredActivities"
        :key="activity.id"
        v-bind:activity="activity"
      ></activity-card>
    </div>
  </div>
</template>

<script>
// import SyntheticActivityCard from "./SyntheticActivityCard.vue";
import ActivityCard from "./ActivityCard.vue";
let photoAPIKey = "563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed";

export default {
  name: "explore-results",
  props: {
    title: String,
    activities: [],
  },
  data: function () {
    return {
      searchTitle: "",
      filteredActivities: [],
      syntheticActivities: [],
      query: "",
    };
  },
  components: {
    ActivityCard,
    // SyntheticActivityCard,
  },
  created() {
    this.query = this.title;
    this.searchTitle = this.title;
    this.search();
    // this.fetch();
  },
  methods: {
    search() {
      this.searchTitle = this.query;
      let search = String(this.query).toLowerCase();
      // search.toLowerCase();
      let filteredActivities = [];
      this.activities.forEach(function (activity) {
        let addActivity = false;
        let type = String(activity.type).toLowerCase();
        let title = String(activity.title).toLowerCase();
        let description = String(activity.description).toLowerCase();

        if (type.includes(search)) {
          addActivity = true;
        } else if (title.includes(search)) {
          addActivity = true;
        } else if (description.includes(search)) {
          addActivity = true;
        }
        if (addActivity == true) {
          filteredActivities.push(activity);
        }
      });
      this.filteredActivities = filteredActivities;
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

            this.syntheticActivities.push(activity);
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
