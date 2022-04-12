<template>
  <div id="explore_jumbo" class="jumbotron jumbotron-fluid explore-search">
    <div class="container">
      <h1 id="explore-body-header" class="display-4">Whats the world up to?</h1>
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
</template>
<script>
export default {
  name: "exploreSearch",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$emit("search-query", this.query);
    },
  },
};
</script>
<style scoped>
.explore-search {
  position: absolute;
  top: 35%;
  left: 25%;
  text-align: center;
  padding: 1rem;
  border: solid 3px rgb(114, 114, 114);
  border-radius: 0.25rem;
  background-color: rgb(196, 195, 195);
}
#explore-btn {
  background-color: rgb(95, 95, 95);
  color: rgb(6, 250, 250);
  border-color: rgb(9, 212, 212);
}
#explore-btn:hover {
  background-color: rgb(117, 117, 117) !important;
}
@media only screen and (max-width: 475px) {
  .explore-search {
    position: fixed;
    margin: 1rem;
    left: unset;
  }
}
</style>
