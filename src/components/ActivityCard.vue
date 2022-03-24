<template>
  <div class="card activity-card">
    <img src="/images/pictureName.jpg" class="card-img-top" />
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
