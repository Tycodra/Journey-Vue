<template>
  <div class="MyJourney">
    <div class="row">
      <ProfileInfo class="col-sm-3" />
      <div class="col">
        <div class="activities-border">
          <h5 id="activity-header">Hobbies</h5>
          <div class="accordion" id="activity-accordion">
            <activity-box
              v-for="activity in this.$root.$data.activities"
              v-bind:key="activity.activity"
              v-bind:title="activity.activity"
              v-bind:activities="activity.activities"
            ></activity-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import ActivityBox from "../components/ActivityBox.vue";

export default {
  name: "userProfile",
  components: {
    ProfileInfo,
    ActivityBox,
  },
  created: function () {
    let activities = [];
    for (const activity in this.$root.$data.activities) {
      console.log(activity.activity);
      activities.push(activity.activity);
    }
  },
};
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
  border: solid white 4px;
  max-width: 75%;
  margin: 10px;
}
#activity-header {
  margin: 5px;
}
.activities-border {
  background-color: rgb(18, 247, 228);
  border-radius: 0.25rem;
  margin-right: 1rem;
  margin-top: 1rem;
}
</style>
