<template>
  <div id="explore-body" class="explore-body container-fluid">
    <div id="explore-box" v-bind:class="{ hide: searched }" class="row">
      <div id="explore_jumbo" class="jumbotron jumbotron-fluid explore-box">
        <div class="container">
          <h1 id="explore-body-header" class="display-4">
            Whats the world up to?
          </h1>
          <p id="explore-body-text" class="lead">
            Explore the hobbies and activities of other people from around the
            world!
          </p>
        </div>
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
          <button id="explore-btn" class="btn" type="submit">Explore</button>
        </form>
      </div>
    </div>
    <explore-box v-if="searched == true" v-bind:title="query"></explore-box>
  </div>
</template>

<script>
import ExploreBox from "../components/ExploreBox.vue";

export default {
  name: "exploreView",
  data() {
    return {
      searched: false,
      query: "",
    };
  },
  components: {
    ExploreBox,
  },
  methods: {
    search: function () {
      this.searched = true;
    },
  },
};
</script>

<style scoped>
.explore-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ccf0f0;
}

.explore-box {
  text-align: center;
  padding: 1rem;
  border: solid 3px rgb(114, 114, 114);
  border-radius: 0.25rem;
  background-color: rgb(196, 195, 195);
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
