<template>
  <div class="MyJourney">
    <div class="row">
      <ProfileInfo class="col-3" />
      <div class="col activity-col">
        <div class="activities-border">
          <div class="row">
            <h5 id="activity-header">Hobbies</h5>
            <button type="button" class="btn" @click="showModal">
              Add Activity
            </button>
            <activity-modal
              v-if="isModalVisible"
              @close="closeModal"
              @complete="completeAction"
              v-bind:isEditActivity="isEditActivity"
              v-bind:activity="currentActivity"
              v-bind:activityTypes="activityTypes"
            ></activity-modal>
          </div>
          <div class="accordion" id="activity-accordion">
            <activity-box
              v-for="activity in activityTypes"
              v-bind:key="activity"
              v-bind:title="activity"
              @edit-activity="editActivity"
              @delete-activity="deleteActivity"
            ></activity-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "../event-bus";
import ProfileInfo from "../components/ProfileInfo.vue";
import ActivityModal from "../components/ActivityModal.vue";
import ActivityBox from "../components/ActivityBox.vue";

export default {
  name: "userProfileJourney",
  data() {
    return {
      isModalVisible: false,
      isEditActivity: false,
      activityTypes: [],
      currentActivity: null,
    };
  },
  components: {
    ProfileInfo,
    ActivityModal,
    ActivityBox,
  },
  created() {
    this.getActivityTypes();
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isEditActivity = false;
    },
    completeAction() {
      this.isModalVisible = false;
      this.isEditActivity = false;
      this.getActivityTypes();
      EventBus.$emit("refresh");
    },
    editActivity(editActivity) {
      console.log(editActivity);
      this.currentActivity = editActivity;
      this.isEditActivity = true;
      this.isModalVisible = true;
    },
    deleteActivity() {
      this.getActivityTypes();
    },
    async getActivityTypes() {
      try {
        let activityType = await axios.get("/api/activityType");

        this.activityTypes = activityType.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
  padding-top: 5px;
}
.activities-border {
  background-color: rgb(24, 255, 236);
  border-radius: 0.25rem;
  margin-right: 1rem;
  margin-top: 1rem;
}
.activity-col {
  width: 71%;
}
.btn {
  background-color: rgb(16, 228, 210);
  border-block-end: 4px solid rgb(38, 246, 229);
  color: white;
  font-weight: 600;
}
@media only screen and (max-width: 475px) {
  .activities-border {
    margin: 0.75rem;
  }
}
</style>
