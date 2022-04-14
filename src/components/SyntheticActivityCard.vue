<template>
  <div class="card activity-card">
    <img :src="image" class="card-img-top img-fluid" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityCard",
  props: {
    image: String,
    title: String,
    description: String,
  },
};
</script>
<style scoped>
.activity-card {
  display: flex;
  width: 13rem;
  height: auto;
  flex: 0 0 auto;
  /* margin: 0.75rem; */
}
.img-fluid {
  align-self: center;
  max-width: 95%;
  margin-top: 0.75rem;
}
.card-body {
  padding: 0.3rem 0.75rem;
}
.card-title {
  margin: 0.3rem;
}
.card-text {
  font-size: 0.75rem;
}
@media only screen and (max-width: 475px) {
  .activity-card {
    display: flex;
    width: 90%;
    height: auto;
    flex: 0 0 auto;
    /* margin: 0.75rem; */
  }
}
</style>
