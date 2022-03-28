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
          <synthetic-activity-card
            v-for="activity in activities"
            :key="activity.id"
            v-bind:image="activity.src"
            v-bind:title="title"
            v-bind:description="activity.description"
          ></synthetic-activity-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SyntheticActivityCard from "./SyntheticActivityCard.vue";
let photoAPIKey = "563492ad6f91700001000001ecb71e3106e145c1a1b1be0661c51aed";

export default {
  name: "activityBox",
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

          for (let i = 0; i < 5; i++) {
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
