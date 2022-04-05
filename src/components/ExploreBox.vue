<template>
  <div class="explore-box">
    <h1>{{ title }}</h1>
    <div class="row activities-block">
      <synthetic-activity-card
        v-for="activity in activities"
        :key="activity.id"
        v-bind:image="activity.src"
        v-bind:title="title"
        v-bind:description="activity.description"
      ></synthetic-activity-card>
    </div>
  </div>
</template>

<script>
import SyntheticActivityCard from "./SyntheticActivityCard.vue";
let photoAPIKey = "563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed";

export default {
  name: "explore-box",
  props: {
    title: String,
  },
  data: function () {
    return {
      activities: [],
    };
  },
  components: {
    SyntheticActivityCard,
  },
  created() {
    this.fetch();
  },
  methods: {
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
.activities-block {
  background-color: darkgray;
  border-radius: 0.25rem;
  display: flex;
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
