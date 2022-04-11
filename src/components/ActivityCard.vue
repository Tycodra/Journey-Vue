<template>
  <div class="card activity-card">
    <div class="row activity-user">
      <img
        src="/images/photo-cole.jpg"
        class="img-fluid rounded-start profile-pic"
      />
      <span id="username">Tycodra</span>
      <button
        class="menu-button dropstart"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-three-dots-vertical"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li class="menu-item">
          <button @click="emitEdit">Edit</button>
        </li>
        <li class="menu-item" @click="deleteActivity">
          <button @click="deleteActivity">Delete</button>
        </li>
      </ul>
    </div>
    <img :src="'/images/' + activity.path" class="card-img-top img-fluid" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ activity.title }}</h5>
      <p class="card-text">{{ activity.description }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ActivityCard",
  props: {
    activity: {},
  },
  methods: {
    emitEdit() {
      this.$emit("edit-activity", this.activity);
    },
    async deleteActivity() {
      try {
        await axios.delete("/api/activities/" + this.activity._id);
        this.$emit("delete-activity");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.activity-card {
  width: 13rem;
  height: auto;
  flex: 0 0 auto;
  /* margin: 0.75rem; */
}
.activity-user {
  align-items: center;
}
.profile-pic {
  border-radius: 50%;
  border: solid white 4px;
  height: auto;
  max-width: 13%;
  /* margin-right: auto; */
  margin: 0.25rem;
}
.rounded-start {
  border-bottom-left-radius: 50% !important;
}
#username {
  width: auto;
}
.menu-button {
  margin-left: auto !important;
  border: none;
  width: 1.5rem;
  margin: 0.25rem;
}
.dropdown-menu {
  text-align: right;
  width: auto;
  min-width: 5rem;
  padding: 0;
  background-color: #75f1e7;
}
.menu-item {
  margin-right: 0.5rem;
}
.card-img-top {
  align-self: center;
  max-width: 95%;
  /* margin-top: 0.75rem; */
}
.card-body {
  padding: 0.5rem 0.5rem !important;
}
</style>
