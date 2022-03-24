<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <!-- https://medium.com/actualize-network/prototyping-with-vue-js-and-bootstrap-2404efe93d6 -->
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="this.title"
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
          <ActivityCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ActivityCard from "./ActivityCard.vue";

export default {
  name: "activityBox",
  props: {
    title: String,
  },
  components: {
    ActivityCard,
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
</style>
