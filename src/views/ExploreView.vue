<template>
  <div id="explore-body" class="explore-body container-fluid">
    <explore-search
      v-if="searched == false"
      @search-query="search"
    ></explore-search>
    <explore-results
      v-if="searched == true"
      v-bind:title="query"
      v-bind:activities="activities"
    ></explore-results>
  </div>
</template>

<script>
import axios from "axios";
import ExploreResults from "../components/ExploreResults.vue";
import ExploreSearch from "../components/ExploreSearch.vue";

export default {
  name: "exploreView",
  data() {
    return {
      searched: false,
      query: "",
      activities: [],
    };
  },
  components: {
    ExploreSearch,
    ExploreResults,
  },
  created() {
    this.getActivities();
  },
  methods: {
    search(query) {
      this.query = query;
      this.searched = true;
    },
    async getActivities() {
      try {
        let activities = await axios.get("/api/activities");

        this.activities = activities.data;
        console.log(activities.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.explore-body {
  height: 100%;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ccf0f0;
}

.hide {
  display: none;
}

.explore-form {
  margin: 1rem;
}

#explore-btn {
  background-color: rgb(95, 95, 95);
  color: rgb(6, 250, 250);
  border-color: rgb(9, 212, 212);
}
#explore-btn:hover {
  background-color: rgb(117, 117, 117) !important;
}
</style>
